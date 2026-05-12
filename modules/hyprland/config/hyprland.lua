require("modules.monitors")
require("modules.rules")
require("modules.devices")
require("modules.theme")
require("modules.startup")
require("modules.mappings")

local config = require("modules.config")
local utils = require("modules.utils")
local monitors = hl.get_monitors()

for index, v in ipairs(monitors) do
	for i = 1, config.workspace_number, 1 do
		local i = i + (config.workspace_number * (index - 1))

		hl.workspace_rule({
			workspace = tostring(i),
			monitor = tostring(v.id),
			default = false,
			persistent = true
		})
	end
end
