-----------------------------
------- Awesome Theme -------
-----------------------------
local xresources = require("beautiful.xresources")
local dpi = xresources.apply_dpi
-------- Custom theme --------
local settings = require("configuration.utils.read-json-settings")
local theme = require("configuration.utils.set-colorscheme")
------------------------------
---
-- theme.wibar_height = dpi(28)

------- Client borders -------
theme.border_normal = theme.colors.dark
theme.border_focus = theme.colors.secondary
theme.border_width = dpi(2)
theme.useless_gap = dpi(2)
theme.border_radius = dpi(2)

theme.notification_icon = "/usr/share/awesome/icons/awesome64.png"
------------------------------
------------------------------
------ Widgets Settings ------
------------------------------
theme.icon_enable_color = theme.colors.secondary
theme.icon_disable_color = theme.colors.text
theme.widget_margin = 15
theme.widget_text_icon_gap = 5

--------- Cpu widget ---------
theme.cpu = { icon = "", color = theme.icon_enable_color }
------------------------------

--------- Ram widget ---------
theme.ram = { icon = "", color = theme.icon_enable_color }
------------------------------

--------- Disk usage ---------
theme.disk = { icon = "", color = theme.icon_enable_color }
------------------------------

------------ Date ------------
theme.date = { icon = "", color = theme.icon_enable_color }
------------------------------

------ bluetooth widget ------
theme.bluetooth_enable = { icon = "󰂯", color = theme.icon_enable_color }
theme.bluetooth_disable = { icon = "󰂲", color = theme.icon_disable_color }
theme.bluetooth_connected = { icon = "󰂱", color = theme.icon_enable_color }
------------------------------

------- Battery widget -------
theme.battery_full = { icon = "󰁹", color = theme.colors.green }
theme.battery_three = { icon = "󰂁", color = theme.colors.cyan }
theme.battery_half = { icon = "󰁾", color = theme.colors.yellow }
theme.battery_quarter = { icon = "󰁻", color = theme.colors.orange }
theme.battery_empty = { icon = "󰂎", color = theme.colors.red }
theme.battery_charging = { icon = "󰂄", color = theme.icon_enable_color }
------------------------------

------ Workspace widget ------
theme.tag_number = 6
theme.tag = { icon = "" }
theme.taglist_fg_focus = theme.colors.white
theme.taglist_fg_urgent = theme.colors.secondary
theme.taglist_fg_occupied = theme.colors.secondary
------------------------------

---- Notifications widget ----
theme.notification = { icon = "󰂚", color = theme.icon_enable_color }
theme.notification_disable = { icon = "󰂛", color = theme.icon_disable_color }
------------------------------

------- Volume control -------
theme.volume_muted = { icon = "󰝟", color = theme.icon_disable_color }
theme.volume_low = { icon = "󰕿", color = theme.icon_enable_color }
theme.volume_medium = { icon = "󰖀", color = theme.icon_enable_color }
theme.volume_high = { icon = "󰕾", color = theme.icon_enable_color }
------------------------------

-------- Mic control ---------
theme.mic_muted = { icon = "󰍭", color = theme.icon_disable_color }
theme.mic_unmuted = { icon = "󰍬", color = theme.icon_enable_color }

------------------------------

------- Systray widget -------
-- theme.bg_systray = theme.colors.primary
theme.systray_icon_spacing = dpi(3)
theme.systray_max_rows = 1
------------------------------

--------- Tag widget ---------
theme.fg_normal = theme.colors.grey
theme.bg_normal = theme.colors.primary
theme.bg_focus = theme.colors.primary
theme.bg_urgent = theme.colors.primary
------------------------------

------- Systray widget -------
theme.logout = { icon = "󰣇", color = theme.icon_enable_color }
------------------------------

------- Notion widget -------
theme.notion = {
  color = {
    active = theme.icon_enable_color,
    inactive = theme.colors.red,
  },
  icon = os.getenv("HOME") .. "/.config/awesome/configuration/theme/icons/notion-cv-logo.svg",
}

------------------------------

return theme
