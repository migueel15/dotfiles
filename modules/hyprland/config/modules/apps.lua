local M = {}


M.imagesFolder = "xdg-user-dir PICTURES"

M.terminal = "kitty"
M.editor = "nvim"
M.ide = "code"
M.fileManager = "nautilus -w"
M.menu = "$HOME/.config/rofi/launchers/type-3/launcher.sh"
M.emojis = [[rofi -modi emoji -show emoji -emoji-format "{emoji}"]]
M.vicinae = "vicinae toggle"
M.web = "zen-browser --blank-window"
M.web_open = "zen-browser"
M.screenlock = "hyprlock"
M.colorpicker = "hyprpicker -arq"

M.notion = M.web_open .. [[ "https://www.notion.so/miguedm/Inicio-65fca48212e3468391b8d0b336e38ac2"]]
M.calendar = M.web_open .. [[ "https://calendar.notion.so/"]]

-- M.llm = M.web_open .. [[ "https://claude.ai/"]]
M.llm = M.web_open .. [[ "https://chatgpt.com/"]]
M.github = M.web_open .. [[ "https://github.com/migueel15"]]
M.nextcloud = M.web_open .. [[ "https://nextcloud.dorlab.net"]]

M.screenshot = "hyprshot -z -m region --raw | satty --right-click-copy --filename -"
-- M.screenshot = "hyprshot -z -m region --clipboard-only"

M.discord = "discord"
M.whatsapp = "whatsdesk"

M.cursor_theme = "Bibata-Modern-Ice"
M.cursor_size = 26

return M
