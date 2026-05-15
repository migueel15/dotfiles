require("modules.monitors")
require("modules.rules")
require("modules.devices")
require("modules.theme")

local dmsplit = require("plugins.dmsplit")

dmsplit.setup({
	num_workspaces = 6,
	persistent_workspaces = true
})

require("modules.startup")
require("modules.mappings")
