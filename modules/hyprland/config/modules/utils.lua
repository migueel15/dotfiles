local M = {}

M.create_notification = function(text, timeout)
	timeout = timeout or 5000
	hl.notification.create({
		text = text,
		timeout = timeout
	})
end

M.serialize_table = function(value, visited)
	visited = visited or {}

	local value_type = type(value)

	if value_type == "nil" then
		return "nil"
	elseif value_type == "boolean" or value_type == "number" then
		return tostring(value)
	elseif value_type == "string" then
		return string.format("%q", value)
	elseif value_type == "table" then
		if visited[value] then
			error("No se pueden serializar referencias circulares")
		end

		visited[value] = true

		local parts = {}
		local index = 1

		for key, item in pairs(value) do
			local serialized_key

			if type(key) == "string"
					and key:match("^[%a_][%w_]*$")
			then
				serialized_key = key
			else
				serialized_key = "[" .. M.serialize_table(key, visited) .. "]"
			end

			parts[index] = string.format(
				"%s = %s",
				serialized_key,
				M.serialize_table(item, visited)
			)

			index = index + 1
		end

		visited[value] = nil

		return "{ " .. table.concat(parts, ", ") .. " }"
	else
		error("Tipo no serializable: " .. value_type)
	end
end


---@class ReservedArea
---@field top? number
---@field left? number
---@field right? number
---@field bottom? number

---@param monitor HL.Monitor | nil
M.has_reserved_area = function(monitor)
	if monitor == nil then return end

	local diff = monitor.reserved.left ~= 0
			or monitor.reserved.right ~= 0
			or monitor.reserved.top ~= 40
			or monitor.reserved.bottom ~= 0

	return diff
end


---
M.get_cursor_local_position = function()
	local current_monitor = hl.get_active_monitor()
	local cursor_pos = hl.get_cursor_pos()
	if current_monitor == nil then return end
	if cursor_pos == nil then return end

	return {
		x = cursor_pos.x - current_monitor.position.x,
		y = cursor_pos.y - current_monitor.position.y
	}
end

---@param monitor HL.Monitor | nil
M.cursor_at_reserved_area = function(monitor)
	if monitor == nil then return end
	local reserved_area = M.has_reserved_area(monitor)
	if reserved_area then
		local cursor_pos = M.get_cursor_local_position()
		if cursor_pos == nil then return end

		local inside = cursor_pos.x <= monitor.reserved.left
		M.create_notification(tostring(inside))
		return inside
	end

	return false
end


return M
