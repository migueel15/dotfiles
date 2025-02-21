return {
	"mistricky/codesnap.nvim",
	build = "make",
	config = function()
		require("codesnap").setup({
			mac_window_bar = true,
			title = "CodeSnap.nvim",
			code_font_family = "CaskaydiaCove Nerd Font",
			bg_theme = "default",
			watermark = "",
			breadcrumbs_separator = "/",
			has_breadcrumbs = true,
			has_line_number = false,
			show_workspace = false,
			min_width = 0,
			bg_x_padding = 122,
			bg_y_padding = 82,
		})
	end,
}
