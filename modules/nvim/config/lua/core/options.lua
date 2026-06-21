local g = vim.g
local opt = vim.opt

-----------------------------------------------------------
-- General
-----------------------------------------------------------
g.mapleader = ","
g.copilot_no_tab_map = false
opt.clipboard = "unnamedplus"
opt.completeopt = "menuone,noinsert,noselect"
-- opt.guicursor = ""     -- Cursor shape block in all modes

-----------------------------------------------------------
-- Neovim UI
-----------------------------------------------------------
opt.relativenumber = true -- Show line numbers relative to position
opt.cursorline = true     -- Highlight current line
opt.number = true         -- Set current line number, if disable 0
opt.showmatch = true      -- Highlight matching parenthesis
opt.foldmethod = "marker" -- Enable folding (default 'foldmarker')
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
opt.conceallevel = 1
opt.fillchars = {
	eob = " ",
}
local statuscolumn_group = vim.api.nvim_create_augroup("CoreStatusColumn", { clear = true })
local function update_statuscolumn()
	local is_normal_buffer = vim.bo.buftype == "" and vim.bo.modifiable and vim.bo.filetype ~= "NvimTree"

	if is_normal_buffer then
		vim.wo.signcolumn = "yes"
		vim.wo.statuscolumn = "%s%=%l    "
	else
		vim.wo.signcolumn = "auto"
		vim.wo.statuscolumn = ""
	end
end

vim.api.nvim_create_autocmd({ "BufWinEnter", "FileType", "WinEnter" }, {
	group = statuscolumn_group,
	callback = update_statuscolumn,
})

update_statuscolumn()
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
opt.history = 200      -- Remember N lines in history
opt.lazyredraw = false -- Faster scrolling
opt.updatetime = 50    -- ms to wait for trigger an event
