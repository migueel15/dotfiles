return {
	'nvim-treesitter/nvim-treesitter',
	dependencies = {
		'nvim-treesitter/nvim-treesitter-textobjects',
	},
	build = ':TSUpdate',
	config = function()
		vim.defer_fn(function()
			require('nvim-treesitter.configs').setup {
				ensure_installed = {
					'c',
					'cpp',
					'cmake',
					'java',
					'go',
					'lua',
					'python',
					'rust',
					'tsx',
					'javascript',
					'typescript',
					'vimdoc',
					'vim',
					'bash'
				},
				sync_install = false,
				ignore_install = {},
				autotag = {
					enable = true
				},

				auto_install = true,

				highlight = { enable = true },
				incremental_selection = {
					enable = true,
				},
				textobjects = {
					select = {
						enable = true,
						lookahead = true
					},
				},
			}
		end, 0)
	end
}
