function map(mode, lhs, rhs, opts)
  
    local options = { noremap = true }
    if opts then
        options = vim.tbl_extend("force", options, opts)
    end
    vim.api.nvim_set_keymap(mode, lhs, rhs, options)
end

--Global
map("n", "<leader>q", "<cmd> wq <CR>")
map("i", "ii", "<ESC>") --Exit from insert mode.
map("i", "<C-j>", "<Down>") 
map("i", "<C-k>", "<Up>")
map("i", "<C-h>", "<Left>")
map("i", "<C-l>", "<Right>")

--Telescope
map("n", "<C-P>", "<cmd> Telescope git_files hidden=true <CR>")
map("n", "<C-F>", "<cmd> Telescope live_grep <CR>")

--Bufferline
map("n","<C-n>","<cmd> enew <CR>") --new buffer
map("n", "<TAB>", "<cmd> BufferLineCycleNext <CR>")
map("n", "<S-TAB>", "<cmd> BufferLineCyclePrev <CR>")
map("n", "<C-X>", "<cmd> bd <CR>")

--NvimComment
map("n", "<C-ç>", "<cmd> CommentToggle <CR>")
map("v", "<C-ç>", "<ESC><cmd> '<,'>CommentToggle <CR>")

--Nvim-Tree
map("n", "<leader>e", "<cmd> NvimTreeToggle <CR>")
map("n", "<leader>r", "<cmd> NvimTreeFocus <CR>")
