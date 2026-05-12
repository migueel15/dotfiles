local M = {}

M.create_notification = function(text, timeout)
	timeout = timeout or 5000
	hl.notification.create({
		text = text,
		timeout = timeout
	})
end


return M
