-- return {
-- 	"github/copilot.vim",
-- 	config = function()
-- 		local enable_copilot = true
-- 		vim.api.nvim_create_user_command("CopilotToggle", function()
-- 			if enable_copilot then
-- 				vim.cmd("Copilot disable")
-- 				print("Copilot disabled")
-- 				enable_copilot = false
-- 			else
-- 				vim.cmd("Copilot enable")
-- 				print("Copilot enabled")
-- 				enable_copilot = true
-- 			end
-- 		end, {})
-- 		vim.keymap.set(
-- 			"i",
-- 			"<C-J>",
-- 			'copilot#Accept("<CR>")',
-- 			{ silent = true, expr = true, desc = "Completar con copilot" }
-- 		)
-- 		vim.keymap.set("n", "<leader>ct", "<cmd>CopilotToggle<cr>", { noremap = true, silent = true })
-- 	end,
-- }

return {
	"zbirenbaum/copilot.lua",
	config = function()
		local enable_copilot = true
		vim.api.nvim_create_user_command("CopilotToggle", function()
			if enable_copilot then
				vim.cmd("Copilot disable")
				print("Copilot disabled")
				enable_copilot = false
			else
				vim.cmd("Copilot enable")
				print("Copilot enabled")
				enable_copilot = true
			end
		end, {})

		require("copilot").setup({
			panel = {
				enable = true,
				auto_refresh = true,
				keymap = {
					jump_prev = "[[",
					jump_next = "]]",
					accept = "<CR>",
					refresh = "gr",
					open = "<M-CR>",
				},
				layout = {
					position = "bottom", -- | top | left | right
					ratio = 0.4,
				},
			},
			suggestion = {
				enabled = true,
				auto_trigger = true,
				hide_during_completion = true,
				debounce = 75,
				keymap = {
					accept = "<Tab>",
					accept_word = false,
					accept_line = false,
					next = "<M-]>",
					prev = "<M-[>",
					dismiss = "<C-]>",
				},
			},
			filetypes = {
				yaml = false,
				markdown = false,
				help = false,
				gitcommit = false,
				gitrebase = false,
				hgcommit = false,
				svn = false,
				cvs = false,
			},
			copilot_node_command = "node", -- Node.js version must be > 18.x
			server_opts_overrides = {},
		})
		-- vim.keymap.set("n", "<leader>ct", "<cmd>Copilot toggle<cr>", { noremap = true, silent = true })
		vim.keymap.set("n", "<leader>ct", "<cmd>CopilotToggle<cr>", { noremap = true, silent = true })
	end,
}
