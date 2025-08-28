return {
	"neovim/nvim-lspconfig",
	event = { "BufReadPre", "BufNewFile" },
	config = function()
		-- Auto-configurar todos los servers instalados por Mason
		local mason_lspconfig = require("mason-lspconfig")

		for _, server in ipairs(mason_lspconfig.get_installed_servers()) do
			if server == "lua_ls" then
				vim.lsp.config('lua_ls', {
					root_markers = { { '.luarc.json', '.luarc.jsonc' }, '.git' },
					settings = {
						Lua = {
							diagnostics = {
								globals = { "vim" },
							},
							workspace = {
								library = {
									[vim.fn.expand("$VIMRUNTIME/lua")] = true,
									[vim.fn.stdpath("config") .. "/lua"] = true,
								},
							},
						},
					},
				})
			else
				vim.lsp.config(server, {
					root_markers = { '.git' },
				})
			end
			vim.lsp.enable(server)
		end

		-- Configurar keymaps y autocomandos con LspAttach
		vim.api.nvim_create_autocmd('LspAttach', {
			callback = function(args)
				local client = vim.lsp.get_client_by_id(args.data.client_id)
				local opts = { buffer = args.buf, noremap = true, silent = true }

				-- LSP keybinds usando las nuevas funciones por defecto
				vim.keymap.set("n", "gr", vim.lsp.buf.references, opts)
				vim.keymap.set("n", "gD", vim.lsp.buf.declaration, opts)
				vim.keymap.set("n", "gd", vim.lsp.buf.definition, opts)
				vim.keymap.set("n", "gi", vim.lsp.buf.implementation, opts)
				vim.keymap.set("n", "gt", vim.lsp.buf.type_definition, opts)
				vim.keymap.set({ "n", "v" }, "<leader>ca", vim.lsp.buf.code_action, opts)
				vim.keymap.set("n", "<leader>rn", vim.lsp.buf.rename, opts)
				vim.keymap.set("n", "<leader>D", vim.diagnostic.open_float, opts)
				vim.keymap.set("n", "<leader>d", vim.diagnostic.open_float, opts)
				vim.keymap.set("n", "[d", vim.diagnostic.jump({ count = -1, float = true }), opts)
				vim.keymap.set("n", "]d", vim.diagnostic.jump({ count = 1, float = true }), opts)
				vim.keymap.set("n", "K", vim.lsp.buf.hover, opts)



				-- Auto-format al guardar si el server lo soporta
				if client then
					if client:supports_method('textDocument/formatting') then
						vim.api.nvim_create_autocmd('BufWritePre', {
							buffer = args.buf,
							callback = function()
								vim.lsp.buf.format({ bufnr = args.buf, id = client.id })
							end,
						})
					end
				end
			end,
		})


		-- Configurar diagnostic signs
		vim.diagnostic.config({
			virtual_text = true,
			signs = {
				text = {
					[vim.diagnostic.severity.ERROR] = "",
					[vim.diagnostic.severity.WARN] = "",
					[vim.diagnostic.severity.HINT] = "󰠠",
					[vim.diagnostic.severity.INFO] = "",
				}
			}
		})
	end,
}
