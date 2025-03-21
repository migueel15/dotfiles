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
	-- if openrgb not running, start it

	-- Set screen to never sleep
	awful.spawn.with_shell("xset s off")
	awful.spawn.with_shell("xset -dpms")
end

-- if openrgb not running, start it
awful.spawn.easy_async_with_shell("pgrep openrgb", function(stdout)
	if stdout == "" then
		awful.spawn(app.openrgb)
	end
end)

-- if solaar not running, start it
awful.spawn.easy_async_with_shell("pgrep solaar", function(stdout)
	if stdout == "" then
		awful.spawn(app.solaar)
	end
end)

-- if mpris not running, start it
awful.spawn.easy_async_with_shell("pgrep mpris", function(stdout)
	if stdout == "" then
		awful.spawn(app.mpris)
	end
end)

-- if discord not running, start it
awful.spawn.easy_async_with_shell("pgrep discord", function(stdout)
	if stdout == "" then
		awful.spawn(app.discord)
	end
end)

-- if picom not running, start it
awful.spawn.easy_async_with_shell("pgrep picom", function(stdout)
	if stdout == "" then
		awful.spawn(app.picom)
	end
end)

-- if nm-applet not running, start it
awful.spawn.easy_async_with_shell("pgrep nm-applet", function(stdout)
	if stdout == "" then
		awful.spawn(app.networkManager)
	end
end)

local idxMainScreenTag, idxSecondScreenTag = read_from_file("/tmp/screenTags.txt")
screen[1].tags[idxMainScreenTag]:view_only()
if screen[2] then
	screen[2].tags[idxSecondScreenTag]:view_only()
end

awful.spawn.easy_async_with_shell("docker inspect notion-sync-cv | jq -r  '.[0].State.Status'", function(stdout)
	if stdout:match("running") then
	else
		awful.spawn.with_shell("docker start notion-sync-cv")
		awesome.emit_signal("notion:request_status")
	end
end)
