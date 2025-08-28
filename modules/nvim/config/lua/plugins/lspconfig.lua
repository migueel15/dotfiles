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

		-- Configurar completeopt para mejor experiencia de completado
		-- vim.opt.completeopt = { "menuone", "noselect", "popup" }
		vim.opt.completeopt = { "menu", "menuone", "noinsert", "fuzzy", "popup" }

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
				vim.keymap.set("n", "[d", vim.diagnostic.goto_prev, opts)
				vim.keymap.set("n", "]d", vim.diagnostic.goto_next, opts)
				vim.keymap.set("n", "K", vim.lsp.buf.hover, opts)

				-- Habilitar completado nativo de LSP con autocompletado
				if client:supports_method('textDocument/completion') then
					vim.lsp.completion.enable(true, client.id, args.buf, {
						autotrigger = true,
						convert = function(item)
							return {
								abbr = item.label,
								kind = item.kind and vim.lsp.protocol.CompletionItemKind[item.kind] or '',
								menu = item.detail or '',
							}
						end,
					})
				end

				-- Keymaps para completado
				vim.keymap.set('i', '<C-Space>', function()
					vim.lsp.completion.get()
				end, { buffer = args.buf, desc = 'Trigger LSP completion' })

				-- vim.api.nvim_create_autocmd("InsertCharPre", {
				--   callback = function(args)
				--     vim.lsp.completion.get()
				--   end
				-- })

				-- -- Enter para aceptar completado
				-- vim.keymap.set('i', '<CR>', function()
				--   if vim.fn.pumvisible() == 1 then
				--     return '<C-y>'
				--   else
				--     return '<CR>'
				--   end
				-- end, { buffer = args.buf, expr = true, replace_keycodes = false })

				-- Auto-format al guardar si el server lo soporta
				if client:supports_method('textDocument/formatting') then
					vim.api.nvim_create_autocmd('BufWritePre', {
						buffer = args.buf,
						callback = function()
							vim.lsp.buf.format({ bufnr = args.buf, id = client.id })
						end,
					})
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
