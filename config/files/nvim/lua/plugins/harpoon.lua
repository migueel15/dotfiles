return {
	"ThePrimeagen/harpoon",
	branch = "harpoon2",
	dependencies = { "nvim-lua/plenary.nvim" },
	config = function()
		local harpoon = require("harpoon")
		harpoon:setup()

		vim.keymap.set("n", "<leader>a", function() harpoon:list():add() end)
		vim.keymap.set("n", "<C-e>", function() harpoon.ui:toggle_quick_menu(harpoon:list()) end)
		vim.keymap.set("n", "<C-v>", function()
			-- vsplit selected lines
		end)
		vim.keymap.set("n", "<Tab>", function()
			local idx = vim.fn.line(".")
			harpoon:list():select(idx)
		end)
	end
}
