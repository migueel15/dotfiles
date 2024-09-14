local rofi = "~/.config/awesome/configuration/ui/rofi/"

local app = {}

app.terminal = "kitty"
app.editor = os.getenv("EDITOR") or "nano"
app.editor_cmd = app.terminal .. " -e " .. app.editor
app.vscode = "code"
app.browser = "zen-browser"
app.locker = "~/Scripts/LockScreen.sh"
app.sysmenu = rofi .. "powermenu.sh &"
app.obsidian = "obsidian"
app.explorer = "GTK_THEME=Adwaita:dark nautilus"

app.discord = "discord"
app.whatsapp = "whatsapp-nativefier"
app.detectScreen = "autorandr -c"
app.solaar = "solaar --window=hide"
app.mpris = "mpris-proxy"

app.notion = app.browser .. " https://notion.so"
app.calendar = app.browser .. " https://calendar.notion.so/"
app.chatgpt = app.browser .. " https://chat.openai.com/chat"
app.github = app.browser .. " https://github.com/migueel15"

app.buscador = "rofi -no-config -no-lazy-grab -show drun -modi drun -theme " .. rofi .. "launcher.rasi"
app.emoji = "rofi -modi emoji -show emoji -emoji-format '{emoji}' -theme " .. rofi .. "emojis.rasi"
app.screenshot = "ksnip -r"
app.reminder = "~/Scripts/reminder.sh"
app.todo = "~/Scripts/todos/todo.sh"
app.bluetooth = "blueberry"
app.networkManager = "nm-applet"
app.picom = "picom"
app.autorandrDual = "autorandr -l DockedOnly"
app.window_picker = "rofi -show window -matching fuzzy -theme " .. rofi .. "actual_windows.rasi"
app.openrgb = "openrgb --startminimized -p 'White-blue'"

return app
