local beautiful = require("beautiful")
local awful = require("awful")
local wibox = require("wibox")
local gears = require("gears")

screen.connect_signal("request::wallpaper", function(s)
	awful.wallpaper({
		screen = s,
		widget = {
			image = gears.surface.crop_surface({
				surface = gears.surface.load_uncached(beautiful.wallpaper),
				ratio = s.geometry.width / s.geometry.height,
			}),
			widget = wibox.widget.imagebox,
		},
	})
end)
