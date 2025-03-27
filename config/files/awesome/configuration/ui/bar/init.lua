local awful = require("awful")
local wibox = require("wibox")
local beautiful = require("beautiful")
local Widgets = require("configuration.ui.bar.components")
require("awful.autofocus")
local gears = require("gears")

screen.connect_signal("request::desktop_decoration", function(s)
  local icons = {}
  for i = 1, beautiful.tag_number do
    table.insert(icons, beautiful.tag.icon)
  end

  awful.tag(icons, s, awful.layout.suit.tile)

  -- Create the wibox
  s.mywibox = awful.wibar({
    position = "top",
    screen = s,
    widget = {
      layout = wibox.layout.stack,
      {
        layout = wibox.layout.align.horizontal,
        {
          layout = wibox.layout.fixed.horizontal,
          Widgets.logout,
          Widgets.workspace(s),
          Widgets.cpu,
          Widgets.ram,
          Widgets.disk,
        },
        nil,
        {
          layout = wibox.layout.fixed.horizontal,
          Widgets.spotify,
          Widgets.battery,
          Widgets.volume,
          Widgets.mic,
          Widgets.notifications,
          Widgets.bluetooth,
          Widgets.notion_sync,
          Widgets.systray,
        },
      },
      {
        Widgets.date,
        valign = "center",
        halign = "center",
        layout = wibox.container.place,
      },
    },
  })
end)
