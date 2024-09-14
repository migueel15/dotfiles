pcall(require, "luarocks.loader")

local gears = require("gears")
local awful = require("awful")
require("awful.autofocus")
local wibox = require("wibox")
local beautiful = require("beautiful")
local naughty = require("naughty")
local ruled = require("ruled")
local menubar = require("menubar")
local hotkeys_popup = require("awful.hotkeys_popup")
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
