-- highlight on yank
local highlight_group = vim.api.nvim_create_augroup('YankHighlight', { clear = true })
vim.api.nvim_create_autocmd('TextYankPost', {
	callback = function()
		vim.highlight.on_yank()
	end,
	group = highlight_group,
	pattern = '*',
})

-- format on save
local formatting_group = vim.api.nvim_create_augroup("LspFormatting", { clear = true })
vim.api.nvim_create_autocmd("BufWritePre", {
	callback = function()
		-- run :Neoformat if installed
		vim.api.nvim_command("silent! Neoformat")
	end,
	group = formatting_group,
	pattern = "*"
})

vim.api.nvim_command("autocmd User FugitiveChanged NvimTreeRefresh")
