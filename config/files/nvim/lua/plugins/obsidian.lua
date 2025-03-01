return {
	"epwalsh/obsidian.nvim",
	version = "*", -- recommended, use latest release instead of latest commit
	dependencies = {
		"nvim-lua/plenary.nvim",
	},
	config = function()
		require("obsidian").setup({
			workspaces = {
				{
					name = "personal",
					path = "~/SecondBrain/",
				},
			},
			notes_subdir = "04-Notes",
			templates = {
				folder = "02-Templates",
			},

			ui = {
				enable = true,
				update_debounce = 200,
				max_file_length = 5000,
				checkboxes = {
					[" "] = { char = "󰄱", hl_group = "ObsidianTodo" },
					["x"] = { char = "", hl_group = "ObsidianDone" },
				},
			},

			note_id_func = function(title)
				local suffix = "fastNote"
				if title ~= nil then
					-- If title is given, transform it into valid file name.
					suffix = title:gsub(" ", "-"):gsub("[^A-Za-z0-9-]", ""):lower()
				else
					-- If title is nil, just add 4 random uppercase letters to the suffix.
					for _ = 1, 4 do
						suffix = suffix .. string.char(math.random(65, 90))
					end
					suffix = tostring(os.date("%y-%m-%d")) .. "-" .. suffix
				end
				-- return tostring(os.time()) .. "-" .. suffix
				return suffix
			end,

			note_frontmatter_func = function(note)
				-- Add the title of the note as an alias.
				if note.title then
					note:add_alias(note.title)
				end

				if note:get_field("created") == nil then
					note:add_field("created", os.date("%Y-%m-%d"))
				end

				local out = { id = note.id, aliases = note.aliases, tags = note.tags }

				-- `note.metadata` contains any manually added fields in the frontmatter.
				-- So here we just make sure those fields are kept in the frontmatter.
				if note.metadata ~= nil and not vim.tbl_isempty(note.metadata) then
					for k, v in pairs(note.metadata) do
						out[k] = v
					end
				end

				return out
			end,
		})

		vim.keymap.set("n", "<leader>on", ":ObsidianNew<CR>", { noremap = true, silent = true })
		vim.keymap.set("n", "<leader>ot", ":ObsidianToggleCheckbox<CR>", { noremap = true, silent = true })
	end,
}
