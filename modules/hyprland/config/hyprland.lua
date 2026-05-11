hl.notification.create({
	text = "Hello, Hyprland!",
	duration = 5000, -- time in ms
	color = "rgb(ff1ea3)",
	-- icon = "...", -- optional
	-- font_size = 13, -- optional
})
local mod = "SUPER"

hl.bind(mod, "Return", function()
	hl.spawn("alacritty")
end)

hl.bind(mod, "Q", function()
	hl.dispatch("killactive")
end)

hl.bind(mod, "1", function()
	hl.dispatch("workspace", "1")
end)

hl.bind(mod .. " SHIFT", "1", function()
	hl.dispatch("movetoworkspace", "1")
end)
