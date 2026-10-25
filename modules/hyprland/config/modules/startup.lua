local apps = require "modules.apps"

hl.env("XCURSOR_SIZE", tostring(apps.cursor_size))
hl.env("HYPRCURSOR_SIZE", tostring(apps.cursor_size))
hl.env("XCURSOR_THEME", apps.cursor_theme)
hl.env("HYPRCURSOR_THEME", apps.cursor_theme)
hl.env("XCURSOR_SIZE", tostring(apps.cursor_size))
hl.env("HYPRCURSOR_SIZE", tostring(apps.cursor_size))
hl.env("QT_QPA_PLATFORMTHEME", "qt5ct:qt6ct")

-- Launch tray apps once the shell owns the tray, so their icons register.
local function after_shell(cmd)
	hl.exec_cmd("systemctl --user start senda.service; " .. cmd)
end

hl.on("hyprland.start", function()
	-- hl.exec_cmd("hyprpaper")
	hl.exec_cmd("systemctl --user start hyprpolkitagent.service")
	hl.exec_cmd("awww-daemon")
	hl.exec_cmd("hypridle")
	-- hl.exec_cmd("sleep 1 && quickshell")
	after_shell("nm-applet")
	hl.exec_cmd("openrgb --startminimized -p purple")
	after_shell(apps.discord)
	after_shell(apps.whatsapp)
	after_shell(apps.sunshine)
	after_shell("gotify-desktop")
	hl.exec_cmd("vicinae server")
	hl.exec_cmd("hyprctl setcursor" .. " " .. apps.cursor_theme .. " " .. apps.cursor_size)
	hl.exec_cmd("gsettings set org.gnome.desktop.interface cursor_theme" ..
		" " .. apps.cursor_theme)
end)

hl.config({
	cursor = {
		no_hardware_cursors = false
	}
})
