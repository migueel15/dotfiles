require("core.mappings")
require("core.lazy")
require("core.autocmds")
require("core.globals")
require("core.custom")
require("core.options")
require("core.diagnostics")

vim.lsp.config("qml-language-server", {
	cmd = { "qml-language-server" },
	filetypes = { "qml" },
	root_markers = { { "qmldir", "shell.qml" }, ".git" },
})

vim.lsp.enable("qml-language-server")
