local awful = require("awful")
local app = require("configuration.apps")
local gears = require("gears")
local naughty = require("naughty")
local beautiful = require("beautiful")

function read_from_file(filename)
	local file = io.open(filename, "r")
	if file then
		local content = file:read("*all")
		file:close()

		local var1, var2 = content:match("([^,]+),([^,]+)")
		return tonumber(var1), tonumber(var2)
	else
		return 1, 1
	end
end

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

	-- Set screen to never sleep
	awful.spawn.with_shell("xset s off")
	awful.spawn.with_shell("xset -dpms")
end

awful.spawn(app.networkManager)

local idxMainScreenTag, idxSecondScreenTag = read_from_file("/tmp/screenTags.txt")
screen[1].tags[idxMainScreenTag]:view_only()
if screen[2] then
	screen[2].tags[idxSecondScreenTag]:view_only()
end
