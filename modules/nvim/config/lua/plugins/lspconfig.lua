return {
	{
		"neovim/nvim-lspconfig",
		config = function()
			-- Configure lua_ls for better vim API detection
			vim.lsp.config("lua_ls", {
				settings = {
					Lua = {
						runtime = {
							version = 'LuaJIT',
						},
						diagnostics = {
							globals = { 'vim' },
						},
						workspace = {
							library = vim.api.nvim_get_runtime_file("", true),
							checkThirdParty = false,
						},
						telemetry = {
							enable = false,
						},
					},
				},
			})

			vim.api.nvim_create_autocmd('LspAttach', {
				callback = function(args)
					local opts = { buffer = args.buf, noremap = true, silent = true }
					-- Navigation
					vim.keymap.set("n", "gd", vim.lsp.buf.definition, opts)
					vim.keymap.set("n", "gD", vim.lsp.buf.declaration, opts)
					vim.keymap.set("n", "gr", vim.lsp.buf.references, opts)
					vim.keymap.set("n", "gi", vim.lsp.buf.implementation, opts)
					vim.keymap.set("n", "gt", vim.lsp.buf.type_definition, opts)

					-- Actions
					vim.keymap.set({ "n", "v" }, "<leader>ca", vim.lsp.buf.code_action, opts)
					vim.keymap.set("n", "<leader>rn", vim.lsp.buf.rename, opts)
					vim.keymap.set("n", "K", vim.lsp.buf.hover, opts)
					vim.keymap.set("n", "<C-k>", vim.lsp.buf.signature_help, opts)
					vim.keymap.set("i", "<C-k>", vim.lsp.buf.signature_help, opts)
				end,
			})
		end
	},
	{
		"mason-org/mason.nvim",
		opts = {}
	},
	{
		"mason-org/mason-lspconfig.nvim",
		dependencies = {
			"neovim/nvim-lspconfig",
			"mason-org/mason.nvim"
		},
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
				"jdtls",
				"astro"
			}
		}
	},
	{
		"nvimtools/none-ls.nvim",
		dependencies = "nvim-lua/plenary.nvim",
	},
	{
		"jay-babu/mason-null-ls.nvim",
		event = { "BufReadPre", "BufNewFile" },
		dependencies = {
			"williamboman/mason.nvim",
			"nvimtools/none-ls.nvim",
		},
		config = function()
			require("mason").setup()
			require("mason-null-ls").setup({
				ensure_installed = {
					"black"
				},
				automatic_installation = true,
				handlers = {},
			})

			local null_ls = require("null-ls")

			null_ls.setup({
				sources = {
					null_ls.builtins.formatting.black
				}
			})
		end,
	}
}
