return {
	"zbirenbaum/copilot.lua",
	dependencies = {
		'AndreM222/copilot-lualine'
	},
	config = function()
		require("copilot").setup({
			suggestion = {
				auto_trigger = true,
				keymap = {
					accept = false
				}
			}
		})
		vim.keymap.set("n", "<leader>ct", "<cmd>Copilot toggle<cr>", { desc = "Toggle Copilot" })
		vim.keymap.set("i", "<Tab>", function()
			if require("copilot.suggestion").is_visible() then
				require("copilot.suggestion").accept()
			else
				return "<Tab>"
			end
		end, { expr = true, silent = true })
		vim.keymap.set("i", "<C-e>", function()
			if require("copilot.suggestion").is_visible() then
				require("copilot.suggestion").dismiss()
			end
		end, { silent = true })
	end
}
