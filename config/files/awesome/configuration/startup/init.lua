local awful = require("awful")
local app = require("configuration.apps")
local gears = require("gears")
local naughty = require("naughty")
local beautiful = require("beautiful")


-- Start only at login
local pathFile = "/tmp/startUp.txt"

if not gears.filesystem.file_readable(pathFile) then
  local command = "echo started > " .. pathFile
  awful.spawn.with_shell(command)
  awful.spawn.with_shell("~/.scripts/set-monitors")
  awful.spawn(app.openrgb)
  awful.spawn(app.solaar)
  awful.spawn(app.mpris)
  awful.spawn(app.picom)
  awful.spawn(app.discord)
end

awful.spawn.with_shell("~/.scripts/pull-repos")
awful.spawn(app.networkManager)