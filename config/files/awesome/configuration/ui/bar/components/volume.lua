local awful = require("awful")
local wibox = require("wibox")
local beautiful = require("beautiful")
local naughty = require("naughty")
local gears = require("gears")
local getAudioSinks = require("configuration.utils.getAudioSinks")
local config = {}

config.popup_bg = beautiful.colors.primary
config.popup_row_hover = beautiful.colors.secondary
config.popup_fg = beautiful.colors.text

local currentIcon = ""
local currentColor = ""

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

local checkWidgets = {}
local popup_content = wibox.widget({
	layout = wibox.layout.fixed.vertical,
})

local popup = awful.popup({
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

function updateSinkList(widget)
	awful.spawn.easy_async_with_shell("pactl list sinks | grep 'Name: ' | awk -F'Name: ' '{print $2}'", function(stdout)
		awful.spawn.easy_async_with_shell(
			"pactl info | grep 'Default Sink:' | awk -F 'Default Sink: ' '{print$2}'",
			function(default_sink)
				for sinkName in string.gmatch(stdout, "([^\n]+)\n") do
					awful.spawn.easy_async_with_shell("pw-cli info " .. sinkName, function(out)
						local id = out:match("id:%s*(%d+)")
						local name = out:match('node.description%s*=%s*"(.-)"')

						function trim(s)
							return s:match("^%s*(.-)%s*$")
						end

						local state = trim(sinkName) == trim(default_sink)

						local sinkObject = { id = id, name = name, state = state }

						local checkWidget = wibox.widget({
							checked = state,
							shape = gears.shape.circle,
							forced_width = 15,
							forced_height = 15,
							widget = wibox.widget.checkbox,
						})

						table.insert(checkWidgets, checkWidget)

						local row = wibox.widget({
							{
								{
									{
										checkWidget,
										valign = "center",
										widget = wibox.container.place,
									},
									{
										text = sinkObject.name,
										widget = wibox.widget.textbox,
									},
									spacing = 10,
									widget = wibox.layout.fixed.horizontal,
								},
								margins = 5,
								widget = wibox.container.margin,
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
							awful.spawn.easy_async("wpctl set-default " .. sinkObject.id, function()
								for _, cw in ipairs(checkWidgets) do
									cw.checked = false
								end
								checkWidget.checked = true
								popup.visible = false
								awesome.emit_signal("volume:update_status")
							end)
						end)

						popup_content:add(row)
					end)
				end
			end
		)
	end)
end

updateSinkList(popup)

awesome.connect_signal("volume:update_sink_list", function()
	popup_content:reset()
	checkWidgets = {}
	updateSinkList(popup)
end)

popup:connect_signal("mouse::leave", function()
	popup.visible = false
end)

volume:connect_signal("button::press", function(_, _, _, button)
	if button == 1 then
	elseif button == 3 then
		awful.spawn("wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle")
		awesome.emit_signal("volume:update_status")
	elseif button == 4 then
		awful.spawn.easy_async("wpctl set-volume -l 1.0 @DEFAULT_AUDIO_SINK@ 5%+", function()
			awesome.emit_signal("volume:update_status")
		end)
	elseif button == 5 then
		awful.spawn.easy_async("wpctl set-volume -l 1.0 @DEFAULT_AUDIO_SINK@ 5%-", function()
			awesome.emit_signal("volume:update_status")
		end)
	end
end)

volume:buttons(awful.util.table.join(awful.button({}, 1, function()
	if popup.visible then
		popup.visible = not popup.visible
	else
		popup:move_next_to(mouse.current_widget_geometry)
	end
end)))

function updateVolumeStatus()
	awful.spawn.easy_async("wpctl get-volume @DEFAULT_AUDIO_SINK@", function(stdout)
		local mute_status = string.find(stdout, "[MUTED]", 1, true)
		local volume_str = string.match(stdout, "Volume: (%d+%.%d+)")
		local vol = volume_str and tonumber(volume_str) * 100 or 0

		if mute_status then
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
			end
		end
		volume.children[1].children[2].fg = currentColor
		volume.children[1].children[2].children[1].children[1].text = currentIcon
		volumeText:set_text(string.format("%.0f%%", vol))
	end)
end

updateVolumeStatus()

awesome.connect_signal("volume:update_status", function()
	updateVolumeStatus()
end)

return volume
