local utils = require "modules.utils"
local M = {}

---@class PinStack.Config
---@field width integer

---@class PinStack.State
---@field active boolean
---@field monitor HL.Monitor | nil
---@field reserved_area integer
---@field clients HL.Window[]
---@field gap integer

---@type PinStack.State
M._state = {
	active = false,
	monitor = nil,
	reserved_area = 0,
	gap = 8,
	clients = {}
}

--- Apply config, load mappings and event listeners.
---@param config PinStack.Config
M.setup = function(config)
	M._state.reserved_area = config.width
	M.apply_mappings()
	M.apply_listeners()
end

M.apply_mappings = function()
	hl.bind("SUPER" .. " + SHIFT + L", function()
		M.toggle_pinstack()
	end)

	hl.bind("SUPER + mouse:272", function()
		local client = hl.get_active_window()
		if M.is_cursor_inside_pinstack() then
			M.attach_client(client, true)
			return
		end

		if not M.is_cursor_inside_pinstack() then
			if M._has_tag(client) then
				M.detach_client(client)
			end
		end
	end, { drag = true })
end

M.apply_listeners = function()
	hl.on("window.open", function(client)
		if M.is_cursor_inside_pinstack() then
			M.attach_client(client)
		end
	end)

	hl.on("window.close", function(client)
		if M.client_inside_stack(client) then
			M.close_client(client)
		end
	end)
end

M.toggle_pinstack = function()
	if M._state.active then
		M.disable_pinstack()
	else
		M.enable_pinstack()
	end
end

M.disable_pinstack = function()
	M._state.active = false
	M.recalculate_stack()

	M.clear_reserved_area(M._state.monitor)
	M._state.monitor = nil
end

M.enable_pinstack = function()
	local currentMonitor = hl.get_active_monitor()
	M._state.monitor = currentMonitor
	M.create_reserved_area(M._state.monitor, { left = M._state.reserved_area })
	M._state.active = true
	M.recalculate_stack()
end

---@param monitor HL.Monitor | nil
---@param area ReservedArea
M.create_reserved_area = function(monitor, area)
	if monitor == nil then return end
	M._update_monitor_reserved_area(monitor, area)
end

---@param monitor HL.Monitor | nil
M.clear_reserved_area = function(monitor)
	if monitor == nil then return end
	M._update_monitor_reserved_area(monitor, {
		left = -M._state.reserved_area,
	})
end

--- Genera un hl.monitor con los datos previos y actualiza el reserved_area
--- En 0.56 hyprland no tiene dispatchers para cambiar atributos por lo que hay que
--- reconstruirlos antes.
--- No hay forma de saber valores iniciales de la configuracion ya que hay atributos
--- que se convierten como `mode` o `position` que pueden tomar valores como
--- `preferred` o `auto` respectivamente
---
--- Hyprland por defecto calcula los valores adecuados en estos casos por lo que no
--- puedo reconstruir los campos iniciales.
---
---@param monitor HL.Monitor
---@param area ReservedArea
M._update_monitor_reserved_area = function(monitor, area)
	local current_monitor_mode = string.format("%dx%d@%f", monitor.width, monitor.height, monitor.refresh_rate)
	local current_monitor_position = string.format("%dx%d", monitor.position.x, monitor.position.y)
	local current_reserved_area = monitor.reserved
	hl.monitor({
		output = monitor.name,
		mode = current_monitor_mode,
		position = current_monitor_position,
		scale = monitor.scale,
		reserved_area = {
			left = current_reserved_area.left + area.left,
		},
	})
end

---@param client HL.Window | nil
---@param dropped boolean? True if window trying to attach is being droped
M.attach_client = function(client, dropped)
	dropped = dropped or false

	if not M._state.active then return end
	if client == nil then return end


	for i, value in ipairs(M._state.clients) do
		if client.address == value.address then
			table.remove(M._state.clients, i)
			M.recalculate_stack()
		end
	end

	hl.dispatch(hl.dsp.window.tag({ tag = "+pinstack", window = client }))

	local ref_position

	if dropped then
		local current_window = hl.get_active_window()
		if current_window == nil then return end

		ref_position = current_window.at.y + (current_window.size.y / 2)
	else
		ref_position = hl.get_cursor_pos().y
	end


	local insert_at = #M._state.clients + 1

	for i, c in ipairs(M._state.clients) do
		local center_y = c.at.y + c.size.y / 2

		if ref_position <= center_y then
			insert_at = i
			break
		end
	end

	table.insert(M._state.clients, insert_at, client)

	M.recalculate_stack()
end

---@param client HL.Window | nil
M.detach_client = function(client)
	if client == nil then return end
	local current_index
	for index, value in ipairs(M._state.clients) do
		if value.address == client.address then
			current_index = index
		end
	end

	if not current_index then return end

	hl.dispatch(hl.dsp.window.float({ action = "off", window = client }))
	hl.dispatch(hl.dsp.window.tag({ tag = "-pinstack", window = client }))
	hl.dispatch(hl.dsp.window.pin({
		action = "off",
		window = client
	}))
	table.remove(M._state.clients, current_index)

	M.recalculate_stack()

	if #M._state.clients == 0 then
		M.disable_pinstack()
		return
	end
end

---@param client HL.Window | nil
M.close_client = function(client)
	if client == nil then return end

	local current_index
	for index, value in ipairs(M._state.clients) do
		if value.address == client.address then
			current_index = index
		end
	end

	if not current_index then return end
	table.remove(M._state.clients, current_index)

	M.recalculate_stack()

	if #M._state.clients == 0 then
		M.disable_pinstack()
		return
	end
end


M.recalculate_stack = function()
	if not M._state.active then
		for _, client in ipairs(M._state.clients) do
			M._hide_client(client)
		end
		return
	end

	local monitor = M._state.monitor
	if monitor == nil then return end

	local clients_size = #M._state.clients

	if clients_size == 0 then
		return
	end


	local client_height = ((monitor.height / monitor.scale) - (M._state.gap * (clients_size + 1))) / clients_size
	local client_width = M._state.reserved_area - M._state.gap * 2

	for index, client in ipairs(M._state.clients) do
		hl.dispatch(hl.dsp.window.float({ action = "on", window = client }))
		hl.dispatch(hl.dsp.window.resize({ x = client_width, y = client_height, window = client }))
		if M._state.active then
			M._show_client(
				client,
				M._state.monitor.position.x + M._state.gap,
				M._state.monitor.position.y + M._state.gap * index + client_height * (index - 1)
			)
		end
	end
end

---@param client HL.Window | nil
M._hide_client = function(client)
	if client == nil then return end

	hl.dispatch(hl.dsp.window.set_prop({
		window = client,
		prop = "no_anim",
		value = "true"
	}))

	hl.dispatch(hl.dsp.window.pin({
		action = "off",
		window = client
	}))

	hl.dispatch(hl.dsp.window.move({
		workspace = "special:pinstack-hidden",
		window = client,
		follow = false
	}))
end

---@param client HL.Window | nil
---@param x integer
---@param y integer
M._show_client = function(client, x, y)
	if client == nil then return end

	hl.dispatch(hl.dsp.window.move({
		workspace = hl.get_active_workspace(),
		window = client

	}))
	hl.dispatch(hl.dsp.window.move({
		x = x,
		y = y,
		window = client
	}))
	hl.dispatch(hl.dsp.window.pin({
		action = "on",
		window = client
	}))

	hl.dispatch(hl.dsp.window.set_prop({
		window = client,
		prop = "no_anim",
		value = "false"
	}))
end

---@param client HL.Window | nil
---@param tag string | nil
---@return boolean
M._has_tag = function(client, tag)
	tag = tag or "pinstack"
	if client == nil then return false end

	local tags = client.tags

	if type(tags) == "string" then
		return client.tags == tag
	end

	if type(tags) == "table" then
		for _, t in ipairs(tags) do
			if t == tag then return true end
		end
	end

	return false
end

M.is_cursor_inside_pinstack = function()
	local cur_pos = hl.get_cursor_pos()
	if cur_pos == nil then return false end
	local monitor = M._state.monitor

	if not M._state.active then return false end
	if monitor == nil then return false end

	local left = monitor.position.x
	local right = left + M._state.reserved_area
	local top = monitor.position.y
	local bottom = top + monitor.height / monitor.scale

	return cur_pos.x >= left
			and cur_pos.x <= right
			and cur_pos.y >= top
			and cur_pos.y <= bottom
end


---@param client HL.Window | nil
M.client_inside_stack = function(client)
	if client == nil then return false end

	for _, c in ipairs(M._state.clients) do
		if client.address == c.address then return true end
	end

	return false
end

return M
