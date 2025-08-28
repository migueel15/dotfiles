return {
	"mason-org/mason-lspconfig.nvim",
	opts = {
		ensure_installed = {
			"lua_ls",
			"pyright",
			"ts_ls",
			"html",
			"cssls",
			"tailwindcss",
			"emmet_ls",
			"jsonls",
			"bashls",
			"marksman",
			"jdtls"
		},
	},
	dependencies = {
		{ "mason-org/mason.nvim", opts = {} },
		"neovim/nvim-lspconfig"
	},
}
