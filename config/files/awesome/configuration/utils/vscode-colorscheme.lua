function setVSCodeTheme(theme)
	local json = require("dkjson")
	local settingsPath = os.getenv("HOME") .. "/.config/Code/User/settings.json"

	local file = io.open(settingsPath, "r")
	if not file then
		return
	end

	local jsonData = file:read("*a")
	file:close()

	local settings = json.decode(jsonData)
	settings["workbench.colorTheme"] = theme

	local modifiedVersion = json.encode(settings, { indent = true })

	local outFile = io.open(settingsPath, "w")
	if not outFile then
		return
	end

	outFile:write(modifiedVersion)
	outFile:close()
end

return setVSCodeTheme
