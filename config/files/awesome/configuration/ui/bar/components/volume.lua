local awful = require("awful")
local wibox = require("wibox")
local beautiful = require("beautiful")
local naughty = require("naughty")
local gears = require("gears")

local config = {}

config.popup_bg = beautiful.colors.primary
config.popup_row_hover = beautiful.colors.secondary
config.popup_fg = beautiful.colors.text

local values = {
	{ id = 43, name = "Logitech PRO X" },
	{ id = 52, name = "Monitor Principal (HDMI)" },
	{ id = 61, name = "Loopback Estéreo analógico" },
}

local currentIcon = ""
local currentColor = ""

local cmd = [[sh -c "pamixer --get-volume"]]

local volumeText = wibox.widget({
	widget = wibox.widget.textbox,
})

local volume = wibox.widget({
	layout = wibox.container.margin,
	left = beautiful.widget_margin,
	{
		layout = wibox.layout.fixed.horizontal,
		{
			widget = wibox.container.background,
			bg = beautiful.colors.primary,
			fg = beautiful.colors.text,
			{
				widget = wibox.container.margin,
				volumeText,
			},
		},
		{
			widget = wibox.container.background,
			bg = beautiful.colors.primary,
			fg = beautiful.volume_high.color,
			{
				widget = wibox.container.margin,
				left = beautiful.widget_text_icon_gap,
				{
					widget = wibox.widget.textbox,
					text = currentIcon,
				},
			},
		},
	},
})

local popup = {}
local popup_content = wibox.layout.fixed.vertical()

for _, value in ipairs(values) do
	local row = wibox.widget({
		{
			{
				text = value.name,
				widget = wibox.widget.textbox,
			},
			widget = wibox.container.margin,
			margins = 5,
		},
		widget = wibox.container.background,
		bg = config.popup_bg,
	})

	row:connect_signal("mouse::enter", function()
		row.bg = config.popup_row_hover
		row.fg = config.popup_bg
	end)

	row:connect_signal("mouse::leave", function()
		row.bg = config.popup_bg
		row.fg = config.popup_fg
	end)

	row:connect_signal("button::press", function()
		awful.spawn("wpctl set-default " .. value.id)
		popup.visible = false
	end)

	popup_content:add(row)
end

popup = awful.popup({
	ontop = true,
	visible = false,
	bg = config.popup_bg,
	fg = config.popup_fg,
	border_width = 1,
	border_color = beautiful.colors.secondary,
	widget = {
		popup_content,
		margins = 10,
		widget = wibox.container.margin,
	},
})

volume:connect_signal("button::press", function(_, _, _, button)
	if button == 1 then
		-- awful.spawn("pavucontrol")
		awesome.emit_signal("volume_popup_toggle")
	elseif button == 3 then
		awful.spawn("wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle")
	elseif button == 4 then
		awful.spawn("wpctl set-volume -l 1.0 @DEFAULT_AUDIO_SINK@ 5%+")
	elseif button == 5 then
		awful.spawn("wpctl set-volume -l 1.0 @DEFAULT_AUDIO_SINK@ 5%-")
	end
end)

volume:buttons(awful.util.table.join(awful.button({}, 1, function()
	if popup.visible then
		popup.visible = not popup.visible
	else
		popup:move_next_to(mouse.current_widget_geometry)
	end
end)))

awful.widget.watch(cmd, 0.1, function(widget, stdout)
	local vol = tonumber(stdout)
	if vol == nil then
		return
	end

	awful.spawn.easy_async_with_shell("pamixer --get-mute", function(stdout)
		if stdout:match("true") then
			currentIcon = beautiful.volume_muted.icon
			currentColor = beautiful.volume_muted.color
		else
			if vol >= 70 then
				currentIcon = beautiful.volume_high.icon
				currentColor = beautiful.volume_high.color
			elseif vol >= 30 then
				currentIcon = beautiful.volume_medium.icon
				currentColor = beautiful.volume_medium.color
			elseif vol >= 0 then
				currentIcon = beautiful.volume_low.icon
				currentColor = beautiful.volume_low.color
			else
				currentIcon = beautiful.volume_muted.icon
				currentColor = beautiful.volume_muted.color
			end
		end

		volume.children[1].children[2].fg = currentColor
		volume.children[1].children[2].children[1].children[1].text = currentIcon
		volumeText:set_text(string.format("%2d%%", math.floor(vol)))
	end)
end)

return volume
