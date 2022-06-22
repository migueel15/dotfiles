## Install Awesomewm
```sh
paru -S awesome-git
```
## Install dependencies
```sh
paru -Sy picom-git alacritty rofi todo-bin acpi acpid acpi_call upower \
jq inotify-tools polkit-gnome xdotool xclip gpick ffmpeg blueman \
pipewire pipewire-alsa pipewire-pulse pamixer brightnessctl scrot redshift \
feh mpv mpd mpc mpdris2 ncmpcpp playerctl --needed 
```
## Required fonts
### Copy fonts inside misc folder 
```sh
cp -r ~/.config/awesome/misc/fonts/* ~/.local/share/fonts/
```
