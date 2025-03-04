-- highlight on yank
local highlight_group = vim.api.nvim_create_augroup("YankHighlight", { clear = true })
vim.api.nvim_create_autocmd("TextYankPost", {
	callback = function()
		vim.highlight.on_yank()
	end,
	group = highlight_group,
	pattern = "*",
})

-- format on save
local formatting_group = vim.api.nvim_create_augroup("LspFormatting", { clear = true })

vim.api.nvim_create_autocmd("BufWritePre", {
	callback = function()
		if vim.bo.filetype == "cs" then
			vim.api.nvim_command("silent! Neoformat")
		else
			vim.lsp.buf.format()
		end
	end,
	group = formatting_group,
	pattern = "*",
})

vim.api.nvim_command("autocmd User FugitiveChanged NvimTreeRefresh")

-- load blanket on java files with jacoco.xml
vim.api.nvim_create_autocmd("BufReadPost", {
	callback = function()
		if vim.bo.filetype == "java" then
			local path = vim.fn.getcwd() .. "/target/site/jacoco/jacoco.xml"
			if vim.fn.filereadable(path) == 1 then
				require("blanket").setup({
					report_path = path,
					filetypes = "java",
				})
				require("blanket").start()
			end
		end
	end,
	group = formatting_group,
	pattern = "*",
})
