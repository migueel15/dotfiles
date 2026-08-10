require("modules.monitors")
require("modules.rules")
require("modules.devices")
require("modules.theme")
require("modules.listeners")

local dmsplit = require("plugins.dmsplit")
local pinstack = require("plugins.pinstack")

dmsplit.setup({
	num_workspaces = 6,
	persistent_workspaces = true
})

pinstack.setup({ width = 750 })

require("modules.startup")
require("modules.mappings")
require("modules.senda_api")
