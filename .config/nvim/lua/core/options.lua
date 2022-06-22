local opt = vim.opt
local g = vim.g

g.mapleader = ","

opt.confirm = true
opt.cul = true
opt.laststatus = 3
opt.mouse = a
opt.history = 1000
opt.ignorecase = true

--AutoUpdate
opt.autoread = true

-- Indentline
opt.expandtab = true
opt.shiftwidth = 2
opt.smartindent = true

-- Numbers
opt.number = true
opt.relativenumber = true
opt.numberwidth = 2
opt.ruler = false

--Theme
-- g.tokyonight_transparent = true
-- g.tokyonight_transparent_sidebar = true
-- vim.cmd[[colorscheme tokyonight]]
