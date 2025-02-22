return {
	"hrsh7th/nvim-cmp",
	dependencies = {
		"L3MON4D3/LuaSnip",
		"saadparwaiz1/cmp_luasnip",

		"hrsh7th/cmp-nvim-lsp",
		"hrsh7th/cmp-nvim-lua",
		"hrsh7th/cmp-path",
		"hrsh7th/cmp-nvim-lsp-signature-help",

		"rafamadriz/friendly-snippets",
	},
	config = function()
		local cmp = require("cmp")
		local luasnip = require("luasnip")
		local lspkind = require("lspkind")

		require("luasnip.loaders.from_vscode").lazy_load()
		luasnip.config.setup({})
		cmp.setup({
			formatting = {
				format = lspkind.cmp_format({
					mode = "text_symbol",
					ellipsis_char = "...",
				}),
			},
			window = {
				completion = cmp.config.window.bordered({
					border = "single",
				}),
			},
			snippet = {
				expand = function(args)
					luasnip.lsp_expand(args.body)
				end,
			},
			completion = {
				completeopt = "menu,menuone,noinsert,noselect",
				keyword_length = 1,
			},
			mapping = cmp.mapping.preset.insert({
				["<C-n>"] = cmp.mapping.select_next_item(),
				["<C-p>"] = cmp.mapping.select_prev_item(),
				["<C-b>"] = cmp.mapping.scroll_docs(-4),
				["<C-f>"] = cmp.mapping.scroll_docs(4),
				["<C-Space>"] = cmp.mapping.complete({}),
				["<Tab>"] = cmp.mapping.confirm({
					behavior = cmp.ConfirmBehavior.Replace,
					select = true,
				}),
				["<CR>"] = cmp.mapping.confirm({
					behavior = cmp.ConfirmBehavior.Replace,
					select = true,
				}),
			}),
			sources = {
				{ name = "nvim_lsp" },
				{ name = "nvim_lua" },
				{ name = "luasnip" },
				{ name = "path" },
				{ name = "nvim_lsp_signature_help" },
			},
			experimental = {
				ghost_text = false,
			},
		})
		-- vim.keymap.set({ "i", "s" }, "<C-L>", function() luasnip.jump(1) end, { silent = true })
		-- vim.keymap.set({ "i", "s" }, "<C-J>", function() luasnip.jump(-1) end, { silent = true })
	end,
}
