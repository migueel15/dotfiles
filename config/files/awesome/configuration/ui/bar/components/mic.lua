local beautiful = require("beautiful")
local wibox = require("wibox")
local awful = require("awful")
local app = require("configuration.apps")

local mic = wibox.widget({
  widget = wibox.container.background,
  bg = beautiful.bg_normal,
  fg = beautiful.logout.color,
  {
    widget = wibox.container.margin,
    left = beautiful.widget_margin,
    {
      widget = wibox.widget.textbox,
      text = beautiful.mic_unmuted.icon,
    },
  },
})

function toggleMicStatus()
  awful.spawn.with_shell("pamixer --default-source -t")
end

-- each 1 secod check the mic status
awful.widget.watch("pamixer --default-source --get-mute", 1, function(widget, stdout)
  if stdout:match("true") then
    mic.fg = beautiful.colors.red
    mic.children[1].children[1].text = beautiful.mic_muted.icon
  else
    mic.fg = beautiful.colors.text
    mic.children[1].children[1].text = beautiful.mic_unmuted.icon
  end
end)

mic:connect_signal("button::press", function(_, _, _, button)
  if button == 1 then
    toggleMicStatus()
  end
end)

return mic
