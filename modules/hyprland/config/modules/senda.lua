-- Generado por Senda. No modificar manualmente.
hl.config({ misc = { allow_session_lock_restore = true, session_lock_xray = true, session_lock_blur = true } })
hl.bind("SUPER + CTRL + l", hl.dsp.exec_cmd("loginctl lock-session"), { description = "Senda lock" })
hl.bind("ALT + ntilde", hl.dsp.exec_cmd("'/home/miguel/repos/SendaDesktopManager/core/dist/senda' stt toggle"), { submap_universal = true, description = "Senda STT toggle" })
-- Marca de detección: Senda la consulta con hyprctl para saber si el módulo
-- está cargado, esté donde esté.
function senda_module_version() return "dev" end
hl.on("hyprland.start", function() hl.exec_cmd("hypridle -c '/home/miguel/.config/senda/hypridle.conf'") end)
