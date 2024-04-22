require("nvim-tree").setup({
	on_attach = function(bufnr)
		-- unbind e key
		vim.api.nvim_buf_set_keymap(bufnr, "n", "e", "<nop>", { noremap = true, silent = true })
	end,
	filters = {
		dotfiles = false,
		exclude = { vim.fn.stdpath "config" .. "/lua/custom" },
	},
	disable_netrw = true,
	hijack_netrw = true,
	hijack_cursor = true,
	hijack_unnamed_buffer_when_opening = false,
	sync_root_with_cwd = true,
	update_focused_file = {
		enable = true,
		update_root = false,
	},
	view = {
		adaptive_size = false,
		side = "right",
		width = 30,
		preserve_window_proportions = true,
	},
	git = {
		enable = false,
		ignore = true,
	},
	filesystem_watchers = {
		enable = true,
	},
	actions = {
		open_file = {
			resize_window = true,
		},
	},
	renderer = {
		root_folder_label = false,
		highlight_git = false,
		highlight_opened_files = "none",

		indent_markers = {
			enable = false,
		},

		icons = {
			show = {
				file = true,
				folder = true,
				folder_arrow = true,
				git = false,
			},

			glyphs = {
				default = "󰈚",
				symlink = "",
				folder = {
					default = "",
					empty = "",
					empty_open = "",
					open = "",
					symlink = "",
					symlink_open = "",
					arrow_open = "",
					arrow_closed = "",
				},
				git = {
					unstaged = "✗",
					staged = "✓",
					unmerged = "",
					renamed = "➜",
					untracked = "★",
					deleted = "",
					ignored = "◌",
				},
			},
		},
	},
})

-- disable contro + e in nvim-tree

vim.keymap.set("n", "<leader>tt", "<cmd>NvimTreeToggle<cr>", { desc = "Toggle NvimTree" })
vim.keymap.set("n", "<leader>tf", "<cmd>NvimTreeFocus<cr>", { desc = "Focus NvimTree" })
vim.keymap.set("n", "<leader>tc", "<cmd>NvimTreeCollapse<cr>", { desc = "Collapse all folders in NvimTree" })
