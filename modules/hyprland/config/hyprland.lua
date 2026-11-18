require("modules.monitors")
require("modules.devices")
require("modules.theme")
require("modules.listeners")

local dmsplit = require("plugins.dmsplit")

dmsplit.setup({
	num_workspaces = 6,
	persistent_workspaces = true
})

require("modules.rules")
require("modules.startup")
require("modules.mappings")
require("zenda.init") -- Zenda: referencia gestionada
