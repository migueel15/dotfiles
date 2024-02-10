require("toggleterm").setup {}
vim.keymap.set({ "n", "t" }, "<C-p>", "<cmd>ToggleTerm<cr>", { desc = "Toggle terminal", noremap = true, silent = true })
