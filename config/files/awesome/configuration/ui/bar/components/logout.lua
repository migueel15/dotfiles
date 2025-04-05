local beautiful = require("beautiful")
local wibox = require("wibox")
local awful = require("awful")
local app = require("configuration.apps")

local system = wibox.widget({
  widget = wibox.container.background,
  bg = beautiful.bg_normal,
  fg = beautiful.logout.color,
  {
    widget = wibox.container.margin,
    left = beautiful.widget_margin,
    {
      widget = wibox.widget.textbox,
      text = beautiful.logout.icon,
    },
  },
})

system:connect_signal("button::press", function(_, _, _, button)
  if button == 1 then
    awful.spawn.with_shell(app.sysmenu)
  end
end)

return system
