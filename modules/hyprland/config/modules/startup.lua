local apps = require "modules.apps"

-- hl.env("XCURSOR_SIZE", tostring(apps.cursor_size))
-- hl.env("HYPRCURSOR_SIZE", tostring(apps.cursor_size))
-- hl.env("XCURSOR_THEME", apps.cursor_theme)
-- hl.env("HYPRCURSOR_THEME", apps.cursor_theme)
-- hl.env("XCURSOR_SIZE", tostring(apps.cursor_size))
-- hl.env("HYPRCURSOR_SIZE", tostring(apps.cursor_size))
-- hl.env("QT_QPA_PLATFORMTHEME", "qt5ct:qt6ct")

-- Exposed for read-only inspection through hyprctl repl.
-- This table is also the source used to launch the programs.
zenda_user_startup = {
	-- { name = "Awww",           command = "awww-daemon" },
	-- { name = "NetworkManager", command = "systemctl --user start zenda.service; nm-applet" },
	-- { name = "OpenRGB",        command = "openrgb --startminimized -p purple" },
	-- { name = "Discord",        command = "systemctl --user start zenda.service; " .. apps.discord },
	-- { name = "Whatsie",        command = "systemctl --user start zenda.service; " .. apps.whatsapp },
	-- { name = "Sunshine",       command = "systemctl --user start zenda.service; " .. apps.sunshine },
	-- { name = "Gotify Desktop", command = "systemctl --user start zenda.service; gotify-desktop" },
	-- { name = "Vicinae",        command = "vicinae server" },
}

hl.on("hyprland.start", function()
	-- hl.exec_cmd("hyprpaper")
	-- hl.exec_cmd("sleep 1 && quickshell")
	-- hl.exec_cmd("hyprctl setcursor" .. " " .. apps.cursor_theme .. " " .. apps.cursor_size)
	-- hl.exec_cmd("gsettings set org.gnome.desktop.interface cursor_theme" ..
	-- 	" " .. apps.cursor_theme)
	for _, entry in ipairs(zenda_user_startup) do
		hl.exec_cmd(entry.command)
	end
end)

hl.config({
	cursor = {
		no_hardware_cursors = false
	}
})
