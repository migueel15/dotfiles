require("todo-comments").setup()
vim.keymap.set('n', '<leader>st', ":TodoTelescope<cr>", { desc = '[S]earch [T]odos', silent = true })
