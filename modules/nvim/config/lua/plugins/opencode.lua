return {
	"NickvanDyke/opencode.nvim",
	dependencies = {
		-- Recommended for `ask()` and `select()`.
		-- Required for `snacks` provider.
		---@module 'snacks' <- Loads `snacks.nvim` types for configuration intellisense.
		{ "folke/snacks.nvim", opts = { input = {}, picker = {}, terminal = {} } },
	},
	config = function()
		---@type opencode.Opts
		vim.g.opencode_opts = {
			-- Your configuration, if any — see `lua/opencode/config.lua`, or "goto definition" on the type or field.
			provider = {
				enabled = "tmux",
				tmux = {
					options = "-h -l 80",
				}
			}
		}

		-- Required for `opts.events.reload`.
		vim.o.autoread = true

		-- Recommended/example keymaps.
		vim.keymap.set({ "n", "x" }, "<C-x>", function() require("opencode").ask("@this: ", { submit = true }) end,
			{ desc = "Preguntar a opencode…" })
		vim.keymap.set({ "n", "t" }, "<C-.>", function() require("opencode").toggle() end, { desc = "Alternar opencode" }) -- hola
		-- vim.keymap.set({ "n", "x" }, "<C-x>", function() require("opencode").select() end,
		-- 	{ desc = "Execute opencode action…" })

		vim.keymap.set({ "n", "x" }, "go", function() return require("opencode").operator("@this ") end,
			{ desc = "Agregar rango a opencode", expr = true })
		vim.keymap.set("n", "goo", function() return require("opencode").operator("@this ") .. "_" end,
			{ desc = "Agregar linea a opencode", expr = true })

		vim.keymap.set("n", "<S-C-u>", function() require("opencode").command("session.half.page.up") end,
			{ desc = "Desplazar opencode arriba" })
		vim.keymap.set("n", "<S-C-d>", function() require("opencode").command("session.half.page.down") end,
			{ desc = "Desplazar opencode abajo" })

		-- You may want these if you stick with the opinionated "<C-a>" and "<C-x>" above — otherwise consider "<leader>o…".
		vim.keymap.set("n", "+", "<C-a>", { desc = "Incrementar bajo el cursor", noremap = true })
		vim.keymap.set("n", "-", "<C-x>", { desc = "Decrementar bajo el cursor", noremap = true })
	end,
}
