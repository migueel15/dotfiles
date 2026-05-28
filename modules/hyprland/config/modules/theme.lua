hl.config({
	general = {
		gaps_in = 3,
		gaps_out = 6,

		border_size = 2,

		col = {
			active_border = "rgba(313244ff)",
			inactive_border = "rgba(31324450)",
		},

		-- Set to true to enable resizing windows by clicking and dragging on borders and gaps
		resize_on_border = false,

		-- Please see https://wiki.hypr.land/Configuring/Tearing/ before you turn this on
		allow_tearing = false,

		layout = "dwindle",
	},

	render = {
		cm_enabled = false,
	},

	decoration = {
		rounding = 10,
		rounding_power = 2,

		-- Change transparency of focused and unfocused windows
		active_opacity = 1.0,
		inactive_opacity = 1.0,

		shadow = {
			enabled = false,
			range = 4,
			render_power = 3,
			color = "rgba(1a1a1aee)",
		},

		blur = {
			enabled            = true,
			passes             = 4,
			size               = 6,
			new_optimizations  = true,
			xray               = false,
			popups             = false,
			popups_ignorealpha = 0,
			noise              = 0.02,
			contrast           = 1.6,
			brightness         = 0.9,
			vibrancy           = 0.4,
			vibrancy_darkness  = 0.4,
		},
	},

	animations = {
		enabled = true,
	},

	dwindle = {
		-- Master switch for pseudotiling.
		-- pseudotile = true,

		-- You probably want this
		preserve_split = true,
	},

	master = {
		new_status = "master",
	},

	misc = {
		force_default_wallpaper = 1,
		disable_hyprland_logo = true,
		initial_workspace_tracking = 0,
		focus_on_activate = true,
	},

	xwayland = {
		force_zero_scaling = true,
	},
})

-- Curves

hl.curve("easeOutQuint", {
	type = "bezier",
	points = {
		{ 0.23, 1 },
		{ 0.32, 1 },
	},
})

hl.curve("easeInOutCubic", {
	type = "bezier",
	points = {
		{ 0.65, 0.05 },
		{ 0.36, 1 },
	},
})

hl.curve("linear", {
	type = "bezier",
	points = {
		{ 0, 0 },
		{ 1, 1 },
	},
})

hl.curve("almostLinear", {
	type = "bezier",
	points = {
		{ 0.5,  0.5 },
		{ 0.75, 1.0 },
	},
})

hl.curve("quick", {
	type = "bezier",
	points = {
		{ 0.15, 0 },
		{ 0.1,  1 },
	},
})

hl.curve("overshoot", {
	type = "bezier",
	points = {
		{ 0.5, 0.9 },
		{ 0.1, 1.04 }
	}
})

-- Animations

-- General
hl.animation({
	leaf = "global",
	enabled = true,
	speed = 2,
	bezier = "default",
})

hl.animation({
	leaf = "border",
	enabled = true,
	speed = 5.39,
	bezier = "easeOutQuint",
})

-- Windows
hl.animation({
	leaf = "windowsIn",
	enabled = true,
	speed = 2,
	bezier = "overshoot",
	style = "slide",
})

hl.animation({
	leaf = "windowsOut",
	enabled = true,
	speed = 2,
	bezier = "overshoot",
	style = "slide",
})

hl.animation({
	leaf = "windowsMove",
	enabled = true,
	speed = 4,
	bezier = "overshoot",
	style = "slide",
})

-- Workspaces
hl.animation({
	leaf = "workspaces",
	enabled = true,
	speed = 3,
	bezier = "overshoot",
	style = "slide"
})

-- Layers
hl.animation({
	leaf = "layers",
	enabled = true,
	speed = 5,
	style = "slide",
	bezier = "overshoot",
})

-- Fade
hl.animation({
	leaf = "fade",
	enabled = true,
	speed = 2,
	bezier = "quick",
})
