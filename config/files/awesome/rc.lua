pcall(require, "luarocks.loader")

local gears = require("gears")
require("awful.autofocus")
local beautiful = require("beautiful")
-- Enable hotkeys help widget for VIM and other apps
-- when client with a matching name is opened:
require("awful.hotkeys_popup.keys")

----------------------------------------------
---- CUSTOM LIBRARIES ------------------------
----------------------------------------------
beautiful.init(gears.filesystem.get_configuration_dir() .. "configuration/theme/theme.lua")

require("configuration.ui")
require("configuration.keys")
require("configuration.rules")
require("configuration.signals")
require("configuration.utils")
require("configuration.startup")

require("gears").timer({
  timeout = 5,
  autostart = true,
  call_now = true,
  callback = function()
    collectgarbage("collect")
  end,
})

collectgarbage("setpause", 110)
collectgarbage("setstepmul", 1000)
