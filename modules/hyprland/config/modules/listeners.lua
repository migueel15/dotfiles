--- Focus hovered client on workspace switch
---@param ws HL.Workspace
hl.on("workspace.active", function(ws)
	local cursor_pos = hl.get_cursor_pos()
	if cursor_pos == nil then return end

	---@param client HL.Window
	for _, client in ipairs(ws.get_windows(ws)) do
		if cursor_pos.x >= client.at.x and
				cursor_pos.x <= client.at.x + client.size.x
				and cursor_pos.y >= client.at.y and
				cursor_pos.y <= client.at.y + client.size.y then
			hl.dispatch(hl.dsp.focus({ window = client }))
			hl.dispatch(hl.dsp.cursor.move(cursor_pos))
		end
	end
end)
