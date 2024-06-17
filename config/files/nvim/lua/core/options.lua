local g = vim.g
local opt = vim.opt

-----------------------------------------------------------
-- General
-----------------------------------------------------------
g.mapleader = ","
g.copilot_no_tab_map = false
opt.clipboard = "unnamedplus"
opt.completeopt = "menuone,noinsert,noselect"

-----------------------------------------------------------
-- Neovim UI
-----------------------------------------------------------
opt.relativenumber = true -- Show line numbers relative to position
opt.cursorline = true     -- Highlight current line
opt.number = true         -- Set current line number, if disable 0
opt.showmatch = true      -- Highlight matching parenthesis
opt.foldmethod = "marker" -- Enable folding (default 'foldmarker')
opt.colorcolumn = "80"    -- Line lenght marker at 80 columns
opt.splitright = true     -- Vertical split to the right
opt.splitbelow = true     -- Horizontal split to the bottom
opt.ignorecase = true     -- Ignore case letters when search
opt.smartcase = true      -- Ignore lowercase for the whole pattern
opt.linebreak = true      -- Wrap on word boundary
opt.laststatus = 3        -- Set global statusline
opt.swapfile = false      -- Disable swapfiles
opt.termguicolors = true
opt.showmode = false      -- Disable mode info under lualine
opt.pumheight = 15

-----------------------------------------------------------
-- Tabs, indent
-----------------------------------------------------------
opt.expandtab = false  -- Use spaces instead of tabs
opt.shiftwidth = 2     -- Shift 2 spaces when tab
opt.tabstop = 2        -- 1 tab == 2 spaces
opt.smartindent = true -- Autoindent new lines

-----------------------------------------------------------
-- Memory, CPU
-----------------------------------------------------------
opt.history = 100     -- Remember N lines in history
opt.lazyredraw = true -- Faster scrolling
opt.updatetime = 250  -- ms to wait for trigger an event
