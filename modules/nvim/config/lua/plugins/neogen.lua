return {
	"danymat/neogen",
	config = function()
		require("neogen").setup({
			enabled = true,
			input_after_comment = true,
		})

		local opts = { noremap = true, silent = true }
		vim.api.nvim_set_keymap("n", "<leader>nf", ":lua require('neogen').generate({ type = 'func' })<CR>", opts)
		vim.api.nvim_set_keymap("n", "<leader>nc", ":lua require('neogen').generate({ type = 'class' })<CR>", opts)
	end,
}
