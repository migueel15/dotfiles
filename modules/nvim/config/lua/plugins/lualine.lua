return {
	"nvim-lualine/lualine.nvim",
	dependencies = { "nvim-tree/nvim-web-devicons", 'AndreM222/copilot-lualine' },
	config = function()
		-- local copilot_indicator = function()
		-- 	local client = vim.lsp.get_clients({ name = "copilot" })[1]
		-- 	if client == nil then
		-- 		return " "
		-- 	end
		--
		-- 	if vim.tbl_isempty(client.requests) then
		-- 		return " " -- default icon whilst copilot is idle
		-- 	end
		--
		-- 	local spinners = { "⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷" }
		-- 	local ms = vim.uv.hrtime() / 1000000
		-- 	local frame = math.floor(ms / 120) % #spinners
		--
		-- 	return spinners[frame + 1]
		-- end

		require("lualine").setup({
			options = {
				icons_enabled = true,
				theme = "catppuccin",
				component_separators = "",
				section_separators = "",
			},
			sections = {
				lualine_a = { "mode" },
				lualine_b = { "branch", "diff", "diagnostics" },
				lualine_c = { "%=", { "filename", path = 1 } },
				-- lualine_x = { "searchcount", "filetype", copilot_indicator },
				lualine_x = { "copilot", "filetype" },
				lualine_y = { "progress" },
				lualine_z = { "location" },
			},
		})
	end,
}
