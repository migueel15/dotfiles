local beautiful = require("beautiful")
local wibox = require("wibox")
local awful = require("awful")

local function toggleMicStatus()
  awful.spawn.with_shell("pamixer --default-source -t")
end

local function getMicState()
  awful.spawn.easy_async_with_shell("pamixer --default-source --get-mute", function(stdout)
    local muted = stdout:match("true") and true or false
    awesome.emit_signal("microphone::mute_changed", muted)
  end)
end

awful.spawn.easy_async_with_shell("pkill -f 'pactl subscribe'", function()
  awful.spawn.with_line_callback("pactl subscribe", {
    stdout = function(line)
      if line:match("source") or line:match("default-source") then
        getMicState()
      end
    end,
  })
end)

local micWidget = wibox.widget({
  widget = wibox.container.background,
  bg = beautiful.bg_normal,
  fg = beautiful.colors.secondary,
  {
    widget = wibox.container.margin,
    left = beautiful.widget_margin,
    {
      widget = wibox.widget.textbox,
      text = beautiful.mic_unmuted.icon,
    },
  },
})

getMicState()

function updateWidget(muted)
  if muted then
    micWidget.fg = beautiful.colors.red
    micWidget.children[1].children[1].text = beautiful.mic_muted.icon
  else
    micWidget.fg = beautiful.colors.secondary
    micWidget.children[1].children[1].text = beautiful.mic_unmuted.icon
  end
end

micWidget:connect_signal("button::press", function(_, _, _, button)
  if button == 1 then
    toggleMicStatus()
  end
end)

awesome.connect_signal("microphone::mute_changed", function(muted)
  updateWidget(muted)
end)

return micWidget
