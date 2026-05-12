local utils = require "modules.utils"
local get_second_monitor_id = function()
	local monitors = hl.get_monitors()
	if #monitors == 1 then
		return monitors[1].id
	end
	return hl.get_monitor("desc:BNQ ZOWIE XL LCD N1J03633SL0").id
end


hl.window_rule({
	name = "Discord placement",
	match = {
		class = "discord"
	},
	monitor = get_second_monitor_id() .. " silent",
	workspace = 5 .. " silent"
})

hl.window_rule({
	name = "Spotify placement",
	match = {
		class = "spotify"
	},
	monitor = get_second_monitor_id() .. " silent",
	workspace = 5 .. " silent"
})
