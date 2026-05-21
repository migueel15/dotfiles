return {
	"saghen/blink.cmp",
	dependencies = {
		"rafamadriz/friendly-snippets",
		"MahanRahmati/blink-nerdfont.nvim",
		"Kaiser-Yang/blink-cmp-avante",
	},
	version = "1.*",

	opts = {
		keymap = { preset = "enter" },
		appearance = {
			nerd_font_variant = "mono",
		},
		completion = {
			menu = {
				border = "single",
				draw = {
					components = {
						kind_icon = {
							text = function(ctx)
								local icons = {
									Text = '󰉿',
									Method = '󰆧',
									Function = '󰆧',
									Constructor = '󰒓',
									Field = '󰜢',
									Variable = '󰀫',
									Property = "󰜢",
									Class = '󰠱',
									Interface = '',
									Struct = '󱡠',
									Module = "",
									Unit = "󰑭",
									Value = "󰎠",
									Enum = '󰦨',
									EnumMember = '󰦨',
									Keyword = '󰻾',
									Constant = '󰏿',
									Snippet = "",
									Color = '󰏘',
									File = '󰈔',
									Reference = '󰬲',
									Folder = '󰉋',
									Event = "",
									Operator = '󰪚',
									TypeParameter = '󰬛',

									Table = "",
									Object = "󰅩",
									Tag = "",
									Array = "[]",
									Boolean = "",
									Number = "",
									Null = "󰟢",
									Supermaven = "",
									String = "󰉿",
									Calendar = "",
									Watch = "󰥔",
									Package = "",
									Copilot = "",
									Codeium = "",
									TabNine = "",
									BladeNav = "",
									Namespace = "󰌗",

								}
								return icons[ctx.kind] or ""
							end
						}
					}
				}
			},
			documentation = {
				auto_show = true,
				window = {
					border = "single",
				},
			},
		},
		sources = {
			default = { "lsp", "path", "snippets", "buffer", "nerdfont" },
			providers = {
				nerdfont = {
					module = "blink-nerdfont",
					name = "Nerd Fonts",
					score_offset = -15,
					opts = { insert = true },
				},
			},
		},
		fuzzy = { implementation = "prefer_rust_with_warning" },
	},
	opts_extend = { "sources.default" },
}
