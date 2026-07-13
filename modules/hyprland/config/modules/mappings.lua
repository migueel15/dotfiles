local apps = require("modules.apps")
local config = require("modules.config")
local utils = require("modules.utils")
local dmsplit = require("plugins.dmsplit")

-- KEYBINDINGS

local mainMod = "SUPER" -- Sets "Windows" key as main modifier

local function exec(cmd)
	return hl.dsp.exec_cmd(cmd)
end

-- WEB SHORTCUTS

hl.bind(mainMod .. " + X", exec(apps.llm))
hl.bind(mainMod .. " + G", exec(apps.github))
hl.bind(mainMod .. " + C", exec(apps.calendar))
hl.bind(mainMod .. " + N", exec(apps.notion))
hl.bind(mainMod .. " + S", exec(apps.nextcloud))


hl.bind("Print", exec(apps.screenshot))

hl.bind(mainMod .. " + Return", exec(apps.terminal))
hl.bind(mainMod .. " + Q", hl.dsp.window.close())
hl.bind(mainMod .. " + SHIFT + Q", hl.dsp.window.kill())

-- hl.bind(mainMod .. " + CTRL + M", hl.dsp.exit())

hl.bind(mainMod .. " + SHIFT + C", function()
	local currentMonitor = hl.get_active_monitor()
	if currentMonitor == nil then return end

	if not hl.get_active_window().floating then
		hl.dispatch(hl.dsp.window.float())
	end
	hl.dispatch(hl.dsp.window.resize({ x = currentMonitor.width * 0.7, y = currentMonitor.height * 0.8 }))
	hl.dispatch(
		hl.dsp.window.center()
	)
end)

hl.bind(mainMod .. " + SHIFT + V", function()
	local physicalTabletWidth = 260 -- mm
	local physicalTabletHeight = 200 -- mm

	local currentWindow = hl.get_active_window()
	local currentMonitor = hl.get_active_monitor()

	if currentWindow == nil then return end
	if currentMonitor == nil or currentMonitor.id == nil then return end

	local pixelTabletWidth = currentMonitor.width / currentMonitor.scale / currentMonitor.physical_width *
			physicalTabletWidth

	local pixelTabletHeight = currentMonitor.height / currentMonitor.scale / currentMonitor.physical_height *
			physicalTabletHeight



	local width = pixelTabletWidth
	local height = pixelTabletHeight

	if currentMonitor == nil or currentWindow == nil then return end

	if not currentWindow.floating then
		hl.dispatch(hl.dsp.window.float())
	end
	hl.dispatch(hl.dsp.window.resize({ x = width, y = height }))
	hl.dispatch(
		hl.dsp.window.center()
	)

	-- hl.exec_cmd("notify-send 'Modo tableta grafica: Cliente - " .. currentWindow.title .. "'")

	hl.config({
		input = {
			tablet = {
				region_size = { width, height },
				region_position = { currentWindow.at.x, currentWindow.at.y },
			}
		}
	})
end)

hl.bind(mainMod .. " + E", exec(apps.fileManager))
hl.bind(mainMod .. " + Space", hl.dsp.window.float({ action = "toggle" }))
hl.bind(mainMod .. " + D", exec(apps.vicinae))
hl.bind(mainMod .. " + period", exec(apps.emojis))
hl.bind(mainMod .. " + W", exec(apps.web))
hl.bind(mainMod .. " + CTRL + L", exec(apps.screenlock))
hl.bind(mainMod .. " + O", exec(apps.colorpicker))
hl.bind(mainMod .. " + V", exec(apps.ide))

-- Move focus with mainMod + hjkl

hl.bind(mainMod .. " + H", hl.dsp.focus({ direction = "l" }))
hl.bind(mainMod .. " + L", hl.dsp.focus({ direction = "r" }))
hl.bind(mainMod .. " + K", hl.dsp.focus({ direction = "u" }))
hl.bind(mainMod .. " + J", hl.dsp.focus({ direction = "d" }))

-- Windows fullscreen

hl.bind(mainMod .. " + F", hl.dsp.window.fullscreen({ mode = "fullscreen", action = "toggle" }))
hl.bind(mainMod .. " + M", hl.dsp.window.fullscreen({ mode = "maximized", action = "toggle" }))
hl.bind(mainMod .. " + SHIFT + S", function()
	local current = hl.get_active_window()
	if current == nil or (not current.floating) then
		hl.exec_cmd("notify-send 'Error pinning window'")
		return
	end

	local isPinned = current.pinned
	local class = current.class

	if isPinned then
		hl.exec_cmd("notify-send '" .. class .. " unpinned'")
	else
		hl.exec_cmd("notify-send '" .. class .. " pinned'")
	end

	hl.dispatch(
		hl.dsp.window.pin()
	)
end)

hl.bind(mainMod .. " + SHIFT + J", hl.dsp.window.swap({ next = true }))

-- Workspaces

for i = 1, dmsplit.get_workspaces_number() do
	hl.bind("SUPER + " .. i, function()
		dmsplit.switch_to_local_workspace(i)
	end)

	hl.bind("SUPER + SHIFT + " .. i, function()
		dmsplit.switch_window_to_local_workspace(i)
	end)
end

hl.bind(mainMod .. " + P", function()
	dmsplit.switch_window_to_other_monitor()
end)

-- Scroll through existing workspaces with mainMod + scroll

hl.bind(mainMod .. " + mouse_down", hl.dsp.focus({ workspace = "e+1" }))
hl.bind(mainMod .. " + mouse_up", hl.dsp.focus({ workspace = "e-1" }))

-- Move/resize windows with mainMod + LMB/RMB and dragging

hl.bind(mainMod .. " + mouse:272", hl.dsp.window.drag(), { mouse = true })
hl.bind(mainMod .. " + mouse:273", hl.dsp.window.resize(), { mouse = true })

local size_resize = 25

hl.bind(mainMod .. " + left", hl.dsp.window.resize({ x = -size_resize, y = 0, relative = true }), { repeating = true })
hl.bind(mainMod .. " + right", hl.dsp.window.resize({ x = size_resize, y = 0, relative = true }), { repeating = true })
hl.bind(mainMod .. " + up", hl.dsp.window.resize({ x = 0, y = -size_resize, relative = true }), { repeating = true })
hl.bind(mainMod .. " + down", hl.dsp.window.resize({ x = 0, y = size_resize, relative = true }), { repeating = true })

-- Apps shortcuts

hl.bind("ALT + ntilde", exec("handy --toggle-transcription"))

-- Laptop multimedia keys for volume and LCD brightness

hl.bind("XF86AudioRaiseVolume", exec("wpctl set-volume -l 1 @DEFAULT_AUDIO_SINK@ 5%+"), {
	repeating = true,
	locked = true,
})

hl.bind("XF86AudioLowerVolume", exec("wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%-"), {
	repeating = true,
	locked = true,
})

hl.bind("XF86AudioMute", exec("wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle"), {
	locked = true,
})

hl.bind("XF86AudioMicMute", exec("wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle"), {
	locked = true,
})

hl.bind("XF86MonBrightnessUp", exec("brightnessctl -e4 -n2 set 5%+"), {
	repeating = true,
	locked = true,
})

hl.bind("XF86MonBrightnessDown", exec("brightnessctl -e4 -n2 set 5%-"), {
	repeating = true,
	locked = true,
})

-- Requires playerctl

hl.bind("XF86AudioNext", exec("playerctl next"), {
	locked = true,
})

hl.bind("XF86AudioPause", exec("playerctl play-pause"), {
	locked = true,
})

hl.bind("XF86AudioPlay", exec("playerctl play-pause"), {
	locked = true,
})

hl.bind("XF86AudioPrev", exec("playerctl previous"), {
	locked = true,
})

-- Bindings externos

hl.bind(mainMod .. " + SHIFT + M", hl.dsp.send_shortcut({
	mods = "",
	key = "F9",
	window = "class:discord",
}))
