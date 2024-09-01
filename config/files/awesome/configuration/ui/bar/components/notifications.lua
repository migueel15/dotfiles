local beautiful = require("beautiful")
local wibox = require("wibox")
local gears = require("gears")
local naughty = require("naughty")
local awful = require("awful")

local currentIcon = naughty.is_suspended() and beautiful.notification_disable.icon or beautiful.notification.icon
local currentColor = naughty.is_suspended() and beautiful.notification_disable.color or beautiful.notification.color

local notification = wibox.widget({
	widget = wibox.container.background,
	bg = beautiful.bg_normal,
	fg = beautiful.notification.color,
	{
		widget = wibox.container.margin,
		left = beautiful.widget_margin,
		{
			widget = wibox.widget.textbox,
			text = currentIcon,
		},
	},
})

local notification_center = awful.popup({
	widget = {
		{
			{

				widget = wibox.widget.textbox,
				text = "Notifications",
			},

			layout = wibox.layout.fixed.vertical,
		},
		margins = 10,
		widget = wibox.container.margin,
	},
	placement = {},
	ontop = true,
	visible = false,
	parent = notification,
})

notification:connect_signal("button::press", function(_, _, _, button)
	if button == 1 then
		awful.placement.next_to(notification_center, {
			preferred_positions = { "bottom" },
		})
		notification_center.visible = not notification_center.visible
	end

	if button == 3 then
		awesome.emit_signal("donot_disturb_toggle")
	end
end)

awesome.connect_signal("donot_disturb_toggle", function()
	naughty.toggle()
	if naughty.is_suspended() then
		currentIcon = beautiful.notification_disable.icon
		currentColor = beautiful.notification_disable.color
	else
		currentIcon = beautiful.notification.icon
		currentColor = beautiful.notification.color
	end

	notification.children[1].children[1].text = currentIcon
	notification.fg = currentColor
end)

return notification
