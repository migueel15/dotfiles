return {
	"zbirenbaum/copilot.lua",
	dependencies = {
		"AndreM222/copilot-lualine",
	},
	config = function()
		local copilot = require("copilot")
		local client = require("copilot.client")
		local command = require("copilot.command")
		local suggestion = require("copilot.suggestion")

		copilot.setup({
			suggestion = {
				auto_trigger = true,
				keymap = {
					accept = false,
				},
			},
		})

		-- disabled by default
		command.disable()

		-- toggle enable/disable
		--

		vim.keymap.set("n", "<leader>ct", function()
			if client.is_disabled() then
				command.enable()
			else
				command.disable()
			end
		end, { desc = "Toggle Copilot" })

		vim.keymap.set("i", "<Tab>", function()
			if suggestion.is_visible() then
				suggestion.accept()
			else
				return "<Tab>"
			end
		end, { expr = true, silent = true })
		vim.keymap.set("i", "<C-e>", function()
			if suggestion.is_visible() then
				suggestion.dismiss()
			end
		end, { silent = true })
	end,
}
