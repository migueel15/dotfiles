local wibox = require("wibox")
local dpi = require("beautiful.xresources").apply_dpi
local beautiful = require("beautiful")
local awful = require("awful")
local naughty = require("naughty")
local gears = require("gears")

-- local systray = wibox.widget({
-- 	{
-- 		{
-- 			widget = wibox.widget.systray(),
-- 			base_size = 25,
-- 		},
-- 		widget = wibox.container.background,
-- 		margins = 5,
-- 	},
-- 	widget = wibox.container.background,
-- 	forced_width = 150,
-- 	forced_height = 24,
-- })
--

local systray = wibox.widget({
	widget = wibox.container.background,
	{
		widget = wibox.widget.systray,
		base_size = 24,
	},
})
local arrow = wibox.widget({
	{
		widget = wibox.widget.textbox,
		text = "",
	},
	widget = wibox.container.background,
	fg = beautiful.colors.gray,
})
local systray_arrow = wibox.widget({
	arrow,
	widget = wibox.container.margin,
	left = beautiful.widget_margin,
	right = beautiful.widget_margin,
})

local popup = awful.popup({
	ontop = true,
	visible = false,
	border_width = 1,
	y = 41,
	x = 0,
	border_color = beautiful.colors.secondary,
	widget = {
		systray,
		widget = wibox.container.margin,
		margins = 10,
	},
})

-- initial setup. Will render and get position
-- popup.opacity = 0
-- popup.visible = true
-- gears.timer.start_new(1, function()
-- 	popup.visible = false
-- end)

local timer = gears.timer({
	timeout = 0.1,
	auto_start = false,
	callback = function()
		local offset = awful.screen.focused().geometry.x
		local x_position = offset + awful.screen.focused().geometry.width - popup.width - 2
		popup.x = x_position
	end,
})

popup:connect_signal("mouse::leave", function()
	awesome.emit_signal("systray_oculto")
	arrow.fg = beautiful.colors.gray
	popup.visible = false
end)

systray_arrow:buttons(awful.util.table.join(awful.button({}, 1, function()
	if popup.visible == true then
		awesome.emit_signal("systray_oculto")
		popup.visible = false
		arrow.fg = beautiful.colors.gray
	else
		awesome.emit_signal("systray_mostrado")
		arrow.fg = beautiful.colors.secondary
		popup.visible = true
		local offset = awful.screen.focused().geometry.x
		local x_position = offset + awful.screen.focused().geometry.width - popup.width - 2
		popup.x = x_position
	end
end)))

awesome.connect_signal("systray_mostrado", function()
	timer:start()
end)

awesome.connect_signal("systray_oculto", function()
	timer:stop()
end)

return systray_arrow
