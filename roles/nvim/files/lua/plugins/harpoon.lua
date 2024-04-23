local harpoon = require("harpoon")

harpoon:setup()

-- keymaps
vim.keymap.set("n", "<leader>a", function() harpoon:list():append() end)
vim.keymap.set("n", "<C-e>", function() harpoon.ui:toggle_quick_menu(harpoon:list()) end)

vim.keymap.set("n", "<Tab>", function()
	local idx = vim.fn.line(".")
	harpoon:list():select(idx)
end)
