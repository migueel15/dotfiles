require('gitsigns').setup()


vim.keymap.set("n", "<leader>gh", ":Gitsigns preview_hunk<CR>", { noremap = true, silent = true, desc = "GitSigns: Preview hunk"})

vim.keymap.set("n", "<leader>gb", ":Gitsigns toggle_current_line_blame<CR>", { noremap = true, silent = true, desc = "GitSigns: Toggle current line blame"})
