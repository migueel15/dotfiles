return {
	{
		"folke/tokyonight.nvim",
	},
	{
		"projekt0n/github-nvim-theme",
	},
	{
		"rebelot/kanagawa.nvim",
	},
	{
		"catppuccin/nvim",
		name = "catppuccin",
		priority = 1000,
		config = function()
			require("catppuccin").setup({
				flavour = "mocha", -- latte, frappe, macchiato, mocha
				background = { -- :h background
					light = "latte",
					dark = "mocha",
				},
				transparent_background = false, -- disables setting the background color.
				show_end_of_buffer = false, -- shows the '~' characters after the end of buffers
				term_colors = true,         -- sets terminal colors (e.g. `g:terminal_color_0`)
				dim_inactive = {
					enabled = false,          -- dims the background color of inactive window
					shade = "dark",
					percentage = 0.15,        -- percentage of the shade to apply to the inactive window
				},
				no_italic = true,           -- Force no italic
				no_bold = false,            -- Force no bold
				no_underline = false,       -- Force no underline
				styles = {                  -- Handles the styles of general hi groups (see `:h highlight-args`):
					comments = {},            -- Change the style of comments
					conditionals = {},
					loops = {},
					functions = {},
					keywords = {},
					strings = {},
					variables = {},
					numbers = {},
					booleans = {},
					properties = {},
					types = {},
					operators = {},
				},
				color_overrides = {},
				custom_highlights = function(colors)
					return {
						BlinkCmpMenu = { bg = colors.base },
						BlinkCmpMenuBorder = { fg = colors.overlay0, bg = colors.base },
						BlinkCmpDocBorder = { fg = colors.overlay0, bg = colors.base },
						BlinkCmpSignatureHelpBorder = { fg = colors.overlay0, bg = colors.base },
						BlinkCmpLabel = { fg = colors.text, },
						BlinkCmpLabelMatch = { fg = colors.blue, bold = true },
						BlinkCmpScrollBarThumb = { bg = colors.blue },
						BlinkCmpScrollBarGutter = { bg = colors.pink },

						BlinkCmpKindClass = { fg = colors.peach },
						BlinkCmpKindInterface = { fg = colors.green },

						FloatBorder = { fg = colors.overlay0, bg = colors.base },

						["@type.builtin"] = { fg = colors.yellow },
						["@property"] = { fg = colors.blue },
						["@variable.member"] = { fg = colors.blue }
					}
				end,
				integrations = {
					blink_cmp = true,
					cmp = true,
					gitsigns = true,
					indent_blankline = {
						enabled = true,
						scope_color = "blue", -- catppuccin color (eg. `lavender`) Default: text
						colored_indent_levels = false,
					},
					nvimtree = true,
					treesitter = true,
					notify = true,
					harpoon = true,
					mini = {
						enabled = true,
						indentscope_color = "",
					},
				},
			})

			-- setup must be called before loading
			vim.cmd.colorscheme("catppuccin")
		end,
	},
	{
		"Mofiqul/vscode.nvim",
	},
	{ "rose-pine/neovim",        name = "rose-pine" },
	{ "ellisonleao/gruvbox.nvim" },
}
