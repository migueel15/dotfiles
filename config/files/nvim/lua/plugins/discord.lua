return {
	-- "andweeb/presence.nvim"
	"vyfor/cord.nvim",
	build = "./build",
	event = "VeryLazy",
	opts = {},
	config = function()
		require("cord").setup({
			usercmds = true,
			timer = {
				interval = 500,
				reset_on_idle = false,
				reset_on_change = false,
			},
			editor = {
				image = nil,
				client = "neovim",
				tooltip = "The Superior Text Editor",
			},
			display = {
				show_time = true,
				show_repository = true,
				show_cursor_position = false,
				swap_fields = false,
				workspace_blacklist = {},
			},
			lsp = {
				show_problem_count = false,
				severity = 1,
				scope = "workspace",
			},
			idle = {
				enable = true,
				show_status = true,
				timeout = 120000,
				disable_on_focus = true,
				text = "Idle",
				tooltip = "💤",
			},
			text = {
				viewing = "Viewing {}",
				editing = "Editing {}",
				file_browser = "Browsing files in {}",
				plugin_manager = "Managing plugins in {}",
				lsp_manager = "Configuring LSP in {}",
				vcs = "Committing changes in {}",
				workspace = "In {}",
			},
			buttons = {
				{
					label = "View Repository",
					url = "git",
				},
			},
		})
	end,
}
