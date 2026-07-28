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

return M
