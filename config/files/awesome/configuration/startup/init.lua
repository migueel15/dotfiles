local awful = require("awful")
local app = require("configuration.apps")
local gears = require("gears")
local naughty = require("naughty")
local beautiful = require("beautiful")
local helpers = require("configuration.helpers")

-- Start only at login
local pathFile = "/tmp/startUp.txt"

if not gears.filesystem.file_readable(pathFile) then
  awful.spawn.with_shell("echo started > " .. pathFile)
  awful.spawn.with_shell("~/.scripts/set-monitors")

  -- Set screen to never sleep
  awful.spawn.with_shell("xset s off")
  awful.spawn.with_shell("xset -dpms")
end

-- Launch applications
helpers.launch_if_not_open("openrgb", app.openrgb)
helpers.launch_if_not_open("solaar", app.solaar)
helpers.launch_if_not_open("mpris", app.mpris)
helpers.launch_if_not_open("discord", app.discord)
helpers.launch_if_not_open("picom", app.picom)
helpers.launch_if_not_open("nm-applet", app.networkManager)

helpers.reload_focused_screen_tags()

awful.spawn.easy_async_with_shell("docker inspect notion-sync-cv | jq -r  '.[0].State.Status'", function(stdout)
  if stdout:match("running") then
  else
    awful.spawn.with_shell("docker start notion-sync-cv")
    awesome.emit_signal("notion:request_status")
  end
end)
