-- highlight on yank
local highlight_group = vim.api.nvim_create_augroup("YankHighlight", { clear = true })
vim.api.nvim_create_autocmd("TextYankPost", {
	callback = function()
		vim.hl.on_yank()
	end,
	group = highlight_group,
	pattern = "*",
})

-- format on save
-- local formatting_group = vim.api.nvim_create_augroup("LspFormatting", { clear = true })
--
-- vim.api.nvim_create_autocmd("BufWritePre", {
-- 	callback = function()
-- 		if vim.bo.filetype == "cs" then
-- 			vim.api.nvim_command("silent! Neoformat")
-- 		else
-- 			vim.lsp.buf.format()
-- 		end
-- 	end,
-- 	group = formatting_group,
-- 	pattern = "*",
-- })
vim.api.nvim_create_autocmd("BufWritePre", {
	pattern = "*",
	callback = function(args)
		require("conform").format({ bufnr = args.buf })
	end,
})

vim.api.nvim_command("autocmd User FugitiveChanged NvimTreeRefresh")

vim.api.nvim_create_autocmd('FileType', {
	pattern = { '*' },
	callback = function() pcall(vim.treesitter.start) end,
})
