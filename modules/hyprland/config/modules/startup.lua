local apps = require "modules.apps"

hl.on("hyprland.start", function()
	hl.exec_cmd("hyprpaper")
	hl.exec_cmd("hypridle")
	hl.exec_cmd("sh -c 'sleep 1 && quickshell")
	hl.exec_cmd("hyprpm reload -n")
	hl.exec_cmd("nm-applet")
	hl.exec_cmd("openrgb --startminimized -p purple")
	hl.exec_cmd("swaync")
	hl.exec_cmd(apps.discord)
	hl.exec_cmd("gotify-desktop")
	hl.exec_cmd("vicinae server")
	hl.exec_cmd("handy --start-hidden")
	hl.exec_cmd("hyprctl setcursor" .. " " .. apps.cursor_theme .. " " .. apps.cursor_size)
	hl.exec_cmd("gsettings set org.gnome.desktop.interface cursor_theme" ..
		" " .. apps.cursor_theme)
end)

hl.env(
	"XCURSOR_SIZE",
	apps.cursor_size
)

hl.config({
	cursor = {
		no_hardware_cursors = false
	}
})
