local wibox = require("wibox")
local beautiful = require("beautiful")

local spotify_widget = require("configuration.ui.bar.components.spotify.spotify_handler")

local spotify = spotify_widget({
	font = beautiful.font,
	dim_when_paused = true,
	dim_opacity = 0.5,
	max_length = -1,
	show_tooltip = false,
})

local spotify_widget = wibox.widget({
	layout = wibox.layout.fixed.horizontal,
	{
		widget = wibox.container.background,
		bg = beautiful.bg_normal,
		fg = beautiful.colors.text,
		{
			widget = wibox.container.margin,
			left = beautiful.widget_margin,
			spotify,
		},
	},
})

return spotify_widget
