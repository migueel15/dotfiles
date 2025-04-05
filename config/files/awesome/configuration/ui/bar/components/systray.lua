local wibox = require("wibox")
local dpi = require("beautiful.xresources").apply_dpi
local beautiful = require("beautiful")
local awful = require("awful")
local naughty = require("naughty")
local gears = require("gears")

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
  placement = function(c)
    awful.placement.next_to(c, { preferred_positions = { "bottom" } })
  end,
})

popup:connect_signal("mouse::leave", function()
  arrow.fg = beautiful.colors.gray
  popup.visible = false
end)

systray_arrow:buttons(awful.util.table.join(awful.button({}, 1, function()
  if popup.visible == true then
    popup.visible = false
    arrow.fg = beautiful.colors.gray
  else
    arrow.fg = beautiful.colors.secondary
    popup.visible = true
    awful.placement.next_to(popup, { preferred_positions = { "bottom" } })
  end
end)))

return systray_arrow
