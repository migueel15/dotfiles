return {
	"nvim-treesitter/nvim-treesitter",
	branch = "main",
	-- dependencies = {
	-- 	"nvim-treesitter/nvim-treesitter-textobjects",
	-- },
	build = ":TSUpdate",
	config = function()
		require("nvim-treesitter").setup({
			ensure_installed = {
				"c",
				"cpp",
				"cmake",
				"java",
				"go",
				"lua",
				"python",
				"rust",
				"tsx",
				"javascript",
				"typescript",
				"vimdoc",
				"vim",
				"bash",
			},
			auto_install = true,
			sync_install = false,
			ignore_install = {},
			highlight = {
				enable = true,
				additional_vim_regex_highlighting = false,
			},
		})
	end,
}
