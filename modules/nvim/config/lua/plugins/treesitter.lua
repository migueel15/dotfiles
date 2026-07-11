return {
	"nvim-treesitter/nvim-treesitter",
	dependencies = {
		'nvim-treesitter/nvim-treesitter-context',
	},
	build = ":TSUpdate",
	config = function()
		require("nvim-treesitter").setup({

			auto_install = true,
			sync_install = true,
			ignore_install = {},
			highlight = {
				enable = true,
				additional_vim_regex_highlighting = false,
			},
		})

		require("nvim-treesitter").install {
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
			"odin"
		}
	end,
}
