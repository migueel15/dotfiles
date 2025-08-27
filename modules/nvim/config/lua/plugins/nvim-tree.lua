return {
  "nvim-tree/nvim-tree.lua",
  dependencies = { "nvim-tree/nvim-web-devicons" },
  config = function()
    require("nvim-tree").setup({
      filters = {
        dotfiles = false,
        exclude = { vim.fn.stdpath("config") .. "/lua/custom" },
      },
      disable_netrw = true,
      hijack_netrw = true,
      hijack_cursor = true,
      hijack_unnamed_buffer_when_opening = false,
      sync_root_with_cwd = true,
      update_focused_file = {
        enable = true,
        update_root = true,
      },
      view = {
        adaptive_size = true,
        side = "right",
        width = 30,
        preserve_window_proportions = true,
      },
      git = {
        enable = true,
        ignore = false,
      },
      filesystem_watchers = {
        enable = true,
      },
      actions = {
        open_file = {
          resize_window = true,
        },
      },
      diagnostics = {
        enable = true,
      },
      renderer = {
        root_folder_label = false,
        highlight_git = true,
        highlight_opened_files = "none",

        indent_markers = {
          enable = true,
        },

        icons = {
          git_placement = "after",
          web_devicons = {
            file = {
              enable = true,
              color = true,
            },
            folder = {
              enable = false,
              color = false,
            },
          },
          show = {
            file = true,
            folder = true,
            folder_arrow = false,
            git = true,
          },

          glyphs = {
            default = "󰈚",
            symlink = "",
            folder = {
              default = "",
              empty = "",
              empty_open = "",
              open = "",
              symlink = "",
              symlink_open = "",
              arrow_open = "",
              arrow_closed = "",
            },
            git = {
              unstaged = "✗",
              staged = "✓",
              unmerged = "",
              renamed = "➜",
              untracked = "★",
              deleted = "",
              ignored = "◌",
            },
          },
        },
      },
    })

    -- Change HL for git file/folders
    vim.api.nvim_set_hl(0, "NvimTreeGitFileNewHL", { link = "diffAdded" })
    vim.api.nvim_set_hl(0, "NvimTreeGitFolderNewHL", { link = "diffAdded" })
    vim.api.nvim_set_hl(0, "NvimTreeGitNewIcon", { link = "diffAdded" })

    -- Keymaps
    vim.keymap.set("n", "<leader>t", "<cmd>NvimTreeToggle<cr>", { desc = "Toggle NvimTree" })
  end,
}
