Test = "adad"

hl.config({
	input = {
		kb_layout = "es",
		sensitivity = 0,
		follow_mouse = 1,

		touchpad = {
			natural_scroll = true,
			tap_to_click = true,
			disable_while_typing = true,
			scroll_factor = 0.4
		},

		tablet = {
			output = "desc:BNQ BenQ EX2710Q TBM00955019",
			-- region_position = { 384, 164 },
			-- region_size = { 1792, 1152 }

			-- region_position = { 808, 335 },
			-- region_size = { 1133, 857 }
		}
	}
})

hl.device({
	name = "logitech-g-pro--1",
	sensitivity = 0,
	accel_profile = "flat"
})
