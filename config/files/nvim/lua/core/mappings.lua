-- Keymaps for better default experience
-- See `:help vim.keymap.set()`
vim.keymap.set({ 'n', 'v' }, '<Space>', '<Nop>', { silent = true })

-- Remap for dealing with word wrap
vim.keymap.set('n', 'k', "v:count == 0 ? 'gk' : 'k'", { expr = true, silent = true })
vim.keymap.set('n', 'j', "v:count == 0 ? 'gj' : 'j'", { expr = true, silent = true })

-- Diagnostic keymaps
vim.keymap.set('n', '[d', vim.diagnostic.goto_prev, { desc = 'Go to previous diagnostic message' })
vim.keymap.set('n', ']d', vim.diagnostic.goto_next, { desc = 'Go to next diagnostic message' })
vim.keymap.set('n', '<leader>e', vim.diagnostic.open_float, { desc = 'Open floating diagnostic message' })
vim.keymap.set('n', '<leader>q', vim.diagnostic.setloclist, { desc = 'Open diagnostics list' })

-- Center line when going-middle up or middle-down
vim.keymap.set('n', '<C-d>', '<C-d>zz', { noremap = true, silent = true })
vim.keymap.set('n', '<C-u>', '<C-u>zz', { noremap = true, silent = true })

vim.keymap.set('n', '<C-s>', '<cmd>write<cr>', { noremap = true, silent = true })

-- Move in insert mode
vim.keymap.set("i", "<M-j>", "<down>", { desc = "Move down in insert mode", noremap = true, silent = true })
vim.keymap.set("i", "<M-k>", "<up>", { desc = "Move up in insert mode", noremap = true, silent = true })
vim.keymap.set("i", "<M-h>", "<left>", { desc = "Move left in insert mode", noremap = true, silent = true })
vim.keymap.set("i", "<M-l>", "<right>", { desc = "Move right in insert mode", noremap = true, silent = true })

-- Tab in visual mode
vim.keymap.set("v", "<Tab>", ">gv", { desc = "Indent right in visual mode", noremap = true, silent = true })
vim.keymap.set("v", "<S-Tab>", "<gv", { desc = "Indent left in visual mode", noremap = true, silent = true })

-- Move block of text up and down
vim.keymap.set("n", "<M-j>", "<cmd>m+<cr>", { desc = "Move line down", noremap = true, silent = true })
vim.keymap.set("n", "<M-k>", "<cmd>m-2<cr>", { desc = "Move line up", noremap = true, silent = true })
vim.keymap.set('x', '<M-j>', ":m '>+1<CR>gv", { noremap = true, silent = true })
vim.keymap.set('x', '<M-k>', ":m '<-2<CR>gv", { noremap = true, silent = true })

-- Set tmux sessionizer
vim.keymap.set("n", "<C-f>", "<cmd>silent !tmux neww tmux-sessionizer<CR>")

-- Toggleterm
vim.keymap.set("t", "<C-p>", "<cmd>ToggleTerm<CR>", { desc = "Toggle terminal" })
vim.keymap.set("n", "<C-p>", "<cmd>ToggleTerm<CR>", { desc = "Toggle terminal" })

-- Move beetween panes
vim.keymap.set("n", "<C-h>", "<cmd>wincmd h<cr>", { desc = "Change to left pane", silent = false })
vim.keymap.set("n", "<C-l>", "<cmd>wincmd l<cr>", { desc = "Change to right pane", silent = false })
vim.keymap.set("n", "<C-j>", "<cmd>wincmd j<cr>", { desc = "Change to bottom pane", silent = false })
vim.keymap.set("n", "<C-k>", "<cmd>wincmd k<cr>", { desc = "Change to top pane", silent = false })

vim.keymap.set("t", "<C-h>", "<cmd>wincmd h<cr>", { desc = "Change to left pane", silent = false })
vim.keymap.set("t", "<C-l>", "<cmd>wincmd l<cr>", { desc = "Change to right pane", silent = false })
vim.keymap.set("t", "<C-j>", "<cmd>wincmd j<cr>", { desc = "Change to bottom pane", silent = false })
vim.keymap.set("t", "<C-k>", "<cmd>wincmd k<cr>", { desc = "Change to top pane", silent = false })

-- Delete word in insert mode
vim.keymap.set("i", "<C-H>", "<C-w>", { desc = "Delete word in insert mode", noremap = true, silent = true })
vim.keymap.set("t", "<C-H>", "<C-w>", { desc = "Delete word in insert mode", noremap = true, silent = true })
