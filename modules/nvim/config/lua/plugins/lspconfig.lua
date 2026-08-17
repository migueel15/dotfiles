return {
	{
		"neovim/nvim-lspconfig",
		config = function()
			local lsp_float_opts = { border = "rounded", offset_x = 1, offset_y = 1 }

			-- Configure lua_ls for better vim API detection
			vim.lsp.config("lua_ls", {
				settings = {
					Lua = {
						runtime = {
							version = "LuaJIT",
						},
						diagnostics = {
							globals = { "vim" },
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


			vim.lsp.config("qml-language-server", {
				cmd = { "qml-language-server" },
				filetypes = { "qml" },
				root_markers = { { "qmldir", "shell.qml" }, ".git" },
			})

			vim.lsp.enable("qml-language-server")

			vim.lsp.config("emmet_language_server", {
				filetypes = {
					"astro",
					"css",
					"eruby",
					"html",
					"htmlangular",
					"htmldjango",
					"javascriptreact",
					"less",
					"sass",
					"scss",
					"svelte",
					"typescriptreact",
					"vue",
					"jsp",
				},
			})

			vim.api.nvim_create_autocmd("LspAttach", {
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
					vim.keymap.set("n", "K", function()
						vim.lsp.buf.hover(lsp_float_opts)
					end, opts)
					vim.keymap.set("n", "<Space>k", function()
						vim.lsp.buf.signature_help(lsp_float_opts)
					end, opts)
					vim.keymap.set("i", "<C-k>", function()
						vim.lsp.buf.signature_help(lsp_float_opts)
					end, opts)
				end,
			})
		end,
	},
	{
		"mason-org/mason.nvim",
		opts = {},
	},
	{
		"mason-org/mason-lspconfig.nvim",
		dependencies = {
			"neovim/nvim-lspconfig",
			"mason-org/mason.nvim",
		},
		opts = {
			ensure_installed = {
				"lua_ls",
				"pyright",
				"ts_ls",
				"html",
				"cssls",
				"tailwindcss",
				"emmet_language_server",
				"jsonls",
				"bashls",
				"marksman",
				"jdtls",
				"gopls",
				"ols",
			},
		},
	},
	{
		"bombsimon/garmin-monkeyc.nvim",
		ft = "monkeyc",
		config = function()
			require("garmin-monkeyc").setup({
				on_attach = nil,
				type_check_level = "Default", -- Default | Off | Gradual | Informative | Strict
				optimization_level = "Default", -- Default | None | Basic | Fast | Slow
				function_completion = "snippet", -- "snippet" (cursor inside ()) | "strip"
				sdk_path = nil,              -- SDK path, set if not in the OS default
				device = nil,                -- device id for type-checking (leave blank unless needed)
				developer_key = "~/.Garmin/developer_key",
			})
		end,
	}
	-- {
	-- 	"nvimtools/none-ls.nvim",
	-- 	dependencies = "nvim-lua/plenary.nvim",
	-- },
	-- {
	-- 	"jay-babu/mason-null-ls.nvim",
	-- 	event = { "BufReadPre", "BufNewFile" },
	-- 	dependencies = {
	-- 		"williamboman/mason.nvim",
	-- 		"nvimtools/none-ls.nvim",
	-- 	},
	-- 	config = function()
	-- 		require("mason").setup()
	-- 		require("mason-null-ls").setup({
	-- 			ensure_installed = {
	-- 				"black",
	-- 			},
	-- 			automatic_installation = true,
	-- 			handlers = {},
	-- 		})
	--
	-- 		local null_ls = require("null-ls")
	--
	-- 		null_ls.setup({
	-- 			sources = {
	-- 				null_ls.builtins.formatting.black,
	-- 			},
	-- 		})
	-- 	end,
	-- },
}
