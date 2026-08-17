local dmsplit = require("plugins.dmsplit")

local get_second_monitor_id = function()
	local monitors = hl.get_monitors()
	local target_description = "BNQ ZOWIE XL LCD N1J03633SL0"

	for _, monitor in ipairs(monitors) do
		if monitor.description == target_description then
			return monitor.id
		end
	end

	local fallback = monitors[2] or monitors[1]
	return fallback and fallback.id or 0
end

local second_monitor = get_second_monitor_id()


hl.window_rule({
	name = "Discord placement",
	match = {
		class = "^(discord|vesktop)$"
	},
	monitor = second_monitor .. " silent",
	workspace = dmsplit.get_monitor_range(second_monitor).min + 4 .. " silent"
})

hl.window_rule({
	name = "Spotify placement",
	match = {
		class = "Spotify"
	},
	monitor = second_monitor .. " silent",
	workspace = dmsplit.get_monitor_range(second_monitor).min + 5 .. " silent"
})

hl.window_rule({
	name = "Game development",
	match = {
		class = "GameDev"
	},
	float = true,
	center = true
})

hl.layer_rule({
	name = "Hide notifications",
	match = {
		namespace = "swaync-notification-window"
	},
	no_screen_share = true
})

-- Change animations for screenshots
hl.layer_rule({
	match = {
		namespace = "hyprpicker"
	},
	no_anim = true,
})

hl.layer_rule({
	match = {
		namespace = "selection"
	},
	animation = "fade"
})

hl.layer_rule({
	match = {
		namespace = ".*Static.*"
	},
	animation = "fade"
})

-- Screen anotator
hl.layer_rule({
	match = {
		namespace = "wayscriber*"
	},
	no_anim = true
})
