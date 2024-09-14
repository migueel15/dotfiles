-- local awful = require("awful")
local expectedValueFromTerminal = [[        Name: alsa_output.pci-0000_01_00.1.hdmi-stereo
        Name: alsa_output.usb-Logitech_PRO_X_Wireless_Gaming_Headset-00.analog-stereo
        Name: alsa_output.platform-snd_aloop.0.analog-stereo]]

-- function getAudioSinks()
-- 	local sinks = {}
-- 	awful.spawn.easy_async_with_shell("pactl list sinks | grep 'Name: '", function(stdout)
-- 		for sink in string.gmatch(stdout, "Name: (.*)\n") do
-- 			awful.spawn.easy_async_with_shell("pw-cli info " .. sink .. "| grep id: | awk '{print $2}'", function(id)
-- 				local sinkObject = { id = id, name = sink }
-- 				table.insert(sinks, sinkObject)
-- 			end)
-- 		end
-- 	end)
-- 	return sinks
-- end
function printTable(tbl)
	for key, value in pairs(tbl) do
		if type(value) == "table" then
			print(key .. ":")
			printTable(value) -- Recursive call for nested tables
		else
			print(key .. ": " .. tostring(value))
		end
	end
end

function getAudioSinks()
	local sinks = {}
	local stdout = expectedValueFromTerminal
	for sink in string.gmatch(stdout, "Name: (.*)\n") do
		-- 	awful.spawn.easy_async_with_shell("pw-cli info " .. sink .. "| grep id: | awk '{print $2}'", function(id)
		-- 		local sinkObject = { id = id, name = sink }
		table.insert(sinks, sink)
		-- end)
	end
	printTable(sinks)
	return sinks
end

getAudioSinks()
return getAudioSinks
