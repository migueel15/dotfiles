return {
	'github/copilot.vim',
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

		vim.keymap.set("n", "<leader>ct", "<cmd>CopilotToggle<cr>", { noremap = true, silent = true })
	end
}
