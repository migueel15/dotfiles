local M = {}

---@class DMSplit.Config
---@field num_workspaces? integer
---@field persistent_workspaces? boolean

M._config = {
	num_workspaces = 5,
	persistent_workspaces = false,
}

local initialized = false
local applied_workspaces = {}

---@param config? DMSplit.Config
function M.setup(config)
	config = config or {}

	if config.num_workspaces ~= nil then
		M._config.num_workspaces = config.num_workspaces
	end

	if config.persistent_workspaces ~= nil then
		M._config.persistent_workspaces = config.persistent_workspaces
	end

	if not initialized then
		hl.on("config.reloaded", function()
			M.ensure_workspaces()
		end)

		hl.on("monitor.added", function()
			M.ensure_workspaces()
		end)

		hl.on("monitor.removed", function()
			M.ensure_workspaces()
		end)

		initialized = true
	end

	M.ensure_workspaces()
end

local function clear_applied_workspaces()
	for workspace, _ in pairs(applied_workspaces) do
		hl.workspace_rule({
			workspace = tostring(workspace),
			persistent = false,
		})
	end

	applied_workspaces = {}
end

local function get_monitor_range(monitor)
	local base = monitor.id
	local min = (base * M._config.num_workspaces) + 1
	local max = (base + 1) * M._config.num_workspaces

	return {
		base = base,
		min = min,
		max = max,
	}
end

---@param monitor HL.Monitor
function M.get_monitor_range(monitor)
	return get_monitor_range(monitor)
end

---Genera los workspaces segun config.
function M.ensure_workspaces()
	clear_applied_workspaces()

	if not M._config.persistent_workspaces then
		return
	end

	for _, monitor in ipairs(hl.get_monitors()) do
		if monitor ~= nil and not monitor.is_mirror and monitor.id ~= -1 then
			local range = get_monitor_range(monitor)

			for workspace = range.min, range.max do
				hl.workspace_rule({
					workspace = tostring(workspace),
					persistent = true,
					monitor = monitor.name,
				})

				applied_workspaces[workspace] = monitor.name
			end
		end
	end
end

---@return HL.Monitor|nil
local function get_active_monitor()
	local monitor = hl.get_active_monitor()

	if monitor == nil or monitor.id == -1 or monitor.is_mirror then
		return nil
	end

	return monitor
end

function M.get_global_workspace(local_workspace)
	local monitor = get_active_monitor()

	if monitor == nil then
		return nil
	end

	local range = get_monitor_range(monitor)

	if local_workspace < 1 or local_workspace > M._config.num_workspaces then
		return nil
	end

	return range.min + local_workspace - 1
end

---@param local_workspace integer
function M.switch_to_local_workspace(local_workspace)
	local global_workspace = M.get_global_workspace(local_workspace)

	if global_workspace == nil then
		return
	end

	hl.dispatch(hl.dsp.focus({
		workspace = global_workspace,
		on_current_monitor = true,
	}))
end

---@param local_workspace integer
---@param follow? boolean
function M.switch_window_to_local_workspace(local_workspace, follow)
	follow = follow or false

	local global_workspace = M.get_global_workspace(local_workspace)

	if global_workspace == nil then
		return
	end

	hl.dispatch(hl.dsp.window.move({
		workspace = global_workspace,
		follow = follow,
	}))
end

function M.switch_window_to_other_monitor()
	hl.dispatch(hl.dsp.window.move({
		monitor = "+1",
	}))
end

---@return integer
function M.get_workspaces_number()
	return M._config.num_workspaces
end

return M
