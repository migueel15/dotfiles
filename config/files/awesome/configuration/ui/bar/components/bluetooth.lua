local wibox = require("wibox")
local beautiful = require("beautiful")
local gears = require("gears")
local app = require("configuration.apps")
local awful = require("awful")
local naughty = require("naughty")

local enabled = true
local lastConnected = false
local connected = false
local Icon = ""
local Color = ""

function CheckEnable()
  awful.spawn.easy_async_with_shell("bluetoothctl show | grep 'Powered: yes'", function(command)
    if command == nil then
      return
    end
    if command == "" then
      enabled = false
    else
      enabled = true
    end
  end)
end

function CheckConnectedDevice()
  awful.spawn.easy_async_with_shell("bluetoothctl devices Connected", function(command)
    if command == nil then
      return
    end
    if command == "" then
      connected = false
      if lastConnected ~= connected then
        gears.timer.start_new(2, function()
          awesome.emit_signal("volume:update_sink_list")
        end)
      end
    else
      connected = true
      if lastConnected ~= connected then
        gears.timer.start_new(5, function()
          awesome.emit_signal("volume:update_sink_list")
        end)
      end
    end
    lastConnected = connected
  end)
end

function SetValues(widget)
  CheckEnable()
  CheckConnectedDevice()

  if enabled then
    if connected then
      Icon = beautiful.bluetooth_connected.icon
      Color = beautiful.bluetooth_connected.color
    else
      Icon = beautiful.bluetooth_enable.icon
      Color = beautiful.bluetooth_enable.color
    end
  else
    Icon = beautiful.bluetooth_disable.icon
    Color = beautiful.bluetooth_disable.color
  end

  -- overwrite values in widgets
  if widget == nil then
    return
  end
  widget.children[1].children[1].children[1].text = Icon
  widget.children[1].fg = Color
end

SetValues()

local bluetooth = wibox.widget({
  layout = wibox.layout.fixed.horizontal,
  {
    widget = wibox.container.background,
    bg = beautiful.colors.primary,
    fg = Color,
    {
      widget = wibox.container.margin,
      left = beautiful.widget_margin,
      {
        widget = wibox.widget.textbox,
        text = Icon,
      },
    },
  },
})
bluetooth:connect_signal("button::press", function(_, _, _, button)
  if button == 1 then -- left click
    awful.spawn(app.bluetooth)
  end
  if button == 3 then -- right click
    if enabled then
      awful.spawn.with_shell("bluetoothctl power off")
    else
      awful.spawn.with_shell("bluetoothctl power on")
    end
  end
end)

gears.timer({
  timeout = 1,
  autostart = true,
  call_now = true,
  callback = function()
    SetValues(bluetooth)
  end,
})

return bluetooth
