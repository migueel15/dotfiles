local dmsplit = require("plugins.dmsplit")

local target_monitor_description = "BNQ ZOWIE XL LCD N1J03633SL0"
local placement_rules_monitor_id

local function get_target_monitor()
	for _, monitor in ipairs(hl.get_monitors()) do
		if monitor.description == target_monitor_description then
			return monitor
		end
	end
end

local function apply_app_placement_rules()
	local monitor = get_target_monitor()
	if monitor == nil then
		return
	end
	if placement_rules_monitor_id == monitor.id then
		return
	end

	local range = dmsplit.get_monitor_range(monitor)

	hl.window_rule({
		name = "Discord placement",
		match = {
			class = "^(discord|vesktop)$"
		},
		monitor = monitor.id .. " silent",
		workspace = range.min + 4 .. " silent"
	})

	hl.window_rule({
		name = "Spotify placement",
		match = {
			class = "Spotify"
		},
		monitor = monitor.id .. " silent",
		workspace = range.min + 5 .. " silent"
	})

	placement_rules_monitor_id = monitor.id
end

apply_app_placement_rules()
hl.on("monitor.added", apply_app_placement_rules)

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
