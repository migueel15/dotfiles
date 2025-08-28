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
		completion = { documentation = { auto_show = true } },
		sources = {
			default = { "avante", "lsp", "path", "snippets", "buffer", "nerdfont" },
			providers = {
				nerdfont = {
					module = "blink-nerdfont",
					name = "Nerd Fonts",
					score_offset = -15,
					opts = { insert = true },
				},
				avante = {
					module = "blink-cmp-avante",
					name = "Avante",
					opts = {},
				},
			},
		},
		fuzzy = { implementation = "prefer_rust_with_warning" },
	},
	opts_extend = { "sources.default" },
}
