local beautiful = require("beautiful")
local wibox = require("wibox")
local awful = require("awful")

-- Widget colors
local fg_enable_color = beautiful.icon_enable_color
local fg_disable_color = beautiful.colors.red or beautiful.icon_disable_color
local bg_color = beautiful.bg_normal

-- Widget creation
local micWidget = wibox.widget({
  widget = wibox.container.background,
  bg = bg_color,
  fg = fg_enable_color,
  {
    widget = wibox.container.margin,
    left = beautiful.widget_margin,
    {
      widget = wibox.widget.textbox,
      text = beautiful.mic_unmuted.icon,
    },
  },
})

-- Functions
local function toggleMicStatus()
  awful.spawn.with_shell("pamixer --default-source -t")
end

local function getMicState()
  awful.spawn.easy_async_with_shell("pamixer --default-source --get-mute", function(stdout)
    local muted = stdout:match("true") and true or false
    awesome.emit_signal("microphone::mute_changed", muted)
  end)
end

local function updateWidget(muted)
  if muted then
    micWidget.fg = fg_disable_color
    micWidget.children[1].children[1].text = beautiful.mic_muted.icon
  else
    micWidget.fg = fg_enable_color
    micWidget.children[1].children[1].text = beautiful.mic_unmuted.icon
  end
end

-- Signal to update the widget when the microphone state changes
awful.spawn.easy_async_with_shell("pkill -f 'pactl subscribe'", function()
  awful.spawn.with_line_callback("pactl subscribe", {
    stdout = function(line)
      if line:match("source") or line:match("default-source") then
        getMicState()
      end
    end,
  })
end)

micWidget:connect_signal("button::press", function(_, _, _, button)
  if button == 1 then
    toggleMicStatus()
  end
end)

awesome.connect_signal("microphone::mute_changed", function(muted)
  updateWidget(muted)
end)

getMicState()

return micWidget
