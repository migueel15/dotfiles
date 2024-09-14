local awful = require("awful")
local wibox = require("wibox")
local naughty = require("naughty")
local beautiful = require("beautiful")
local gears = require("gears")

local notion_icon = wibox.widget({
	widget = wibox.widget.imagebox,
	resize = true,
	forced_height = 22,
	forced_width = 22,
	image = beautiful.notion_icon,
})

function trim(s)
	return s:match("^%s*(.-)%s*$")
end

function GetNotionSyncStatus()
	awful.spawn.easy_async_with_shell("docker inspect notion-sync-cv | jq -r  '.[0].State.Status'", function(stdout)
		if trim(stdout) == "running" then
			notion_icon.image = gears.color.recolor_image(beautiful.notion_icon, beautiful.notion_status_color.active)
		else
			notion_icon.image = gears.color.recolor_image(beautiful.notion_icon, beautiful.notion_status_color.inactive)
		end
	end)
end

function ActivateNotionSyncContainer()
	awful.spawn.easy_async("docker start notion-sync-cv", function(stdout)
		GetNotionSyncStatus()
	end)
end

GetNotionSyncStatus()

local notion_widget = wibox.widget({
	{
		notion_icon,
		widget = wibox.container.place,
		valign = "center",
		halign = "center",
	},
	widget = wibox.container.margin,
	left = beautiful.widget_margin,
})

notion_widget:connect_signal("button::press", function(_, _, _, button)
	if button == 1 then
		ActivateNotionSyncContainer()
	end
end)

gears.timer({
	timeout = 60,
	autostart = true,
	call_now = true,
	callback = function()
		GetNotionSyncStatus()
	end,
})

awesome.connect_signal("notion:request_status", function()
	GetNotionSyncStatus()
end)

return notion_widget
