require("devices")
require("monitors")
require("startup")

local apps = require("apps")

hl.bind("SUPER + Return", hl.dsp.exec_cmd(apps.terminal))
hl.bind("SUPER + w", hl.dsp.exec_cmd(apps.web))
hl.bind("SUPER" .. " + M",
	hl.dsp.exec_cmd("command -v hyprshutdown >/dev/null 2>&1 && hyprshutdown || hyprctl dispatch 'hl.dsp.exit()'"))
