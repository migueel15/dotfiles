local wezterm = require("wezterm")
local act = wezterm.action
local mux = wezterm.mux
local config = wezterm.config_builder()

config.color_scheme = "Catppuccin Mocha"
config.font = wezterm.font("JetBrainsMono Nerd Font")
config.font_size = 11

config.keys = {
  { key = "Backspace", mods = "CTRL", action = act.SendKey({ key = "w", mods = "CTRL" }) },
}

config.cursor_thickness = 2

config.enable_tab_bar = false
-- config.window_background_image = os.getenv("HOME") .. "/.config/wezterm/assets/bg-blurred.png"
config.window_padding = {
  left = 20,
  right = 20,
  top = 20,
  bottom = 20,
}
return config
