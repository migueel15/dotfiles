<div align="center">

# AwesomeWM
##### My custom configuration for AwesomeWM
![awesomeWM](https://img.shields.io/static/v1?style=for-the-badge&message=awesomeWM&color=535D6C&logo=awesomeWM&logoColor=FFFFFF&label=)
[![Lua](https://img.shields.io/badge/Lua-blue.svg?style=for-the-badge&logo=lua)](http://www.lua.org)

![captura_20240914-202902](https://github.com/user-attachments/assets/ca31a8be-074c-402e-895a-f5d2a8d26bb2)
![captura_20240914-202836](https://github.com/user-attachments/assets/9404dad0-2a10-45de-8572-be815601df9f)
![captura_20240914-202957](https://github.com/user-attachments/assets/c3a06ce4-7208-4d41-9ea1-3837df5288bb)


### Installation
```sh 
# Remove previous configuration
rm -rf $XDG_CONFIG_HOME/awesome

# Install dependencies
if ! which awesome &> /dev/null; then
		gum spin --spinner dot --title "Checking for $(gum style --foreground 212 'yay')" -- 
    yay -S rofi wmctrl visual-studio-code-bin firefox solaar bluez bluez-utils blueberry networkmanager jq network-manager-applet picom autorandr playerctl pamixer brightnessctl ranger zathura tlp tlpui gpick pavucontrol pipewire-alsa pipewire-pulse pipewire-audio nodejs upower luarocks &&
    sudo luarocks install lyaml &&
    sudo luarocks install dkjson &&
    yay -S awesome-git
fi

# Restart awesome to take effect (Ctrl + r)
```
