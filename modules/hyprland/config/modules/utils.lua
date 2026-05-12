local config = require("modules.config")
local M = {}

M.create_notification = function(text, timeout)
	timeout = timeout or 5000
	hl.notification.create({
		text = text,
		timeout = timeout
	})
end

M.get_focused_monitor_index = function()
	local monitors = hl.get_monitors()
	for index, monitor in ipairs(monitors) do
		if monitor.focused then
			return index
		end
	end
end

M.get_global_workspace = function(local_workspace)
	local monitor_index = M.get_focused_monitor_index()
	return local_workspace + (config.workspace_number * (monitor_index - 1))
end

M.switch_to_local_workspace = function(local_workspace)
	local global_workspace = M.get_global_workspace(local_workspace)
	hl.dispatch(hl.dsp.focus({ workspace = global_workspace }))
end

M.switch_window_to_local_workspace = function(local_workspace, follow)
	follow = follow or false
	local global_workspace = M.get_global_workspace(local_workspace)
	hl.dispatch(
		hl.dsp.window.move({
			workspace = global_workspace,
			follow = follow
		})
	)
end

M.switch_window_to_other_monitor = function()
	hl.dispatch(
		hl.dsp.window.move({
			monitor = "+1"
		})
	)
end


return M
