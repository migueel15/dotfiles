return {
	"lukas-reineke/indent-blankline.nvim",
	main = "ibl",
	opts = {
		scope = { show_start = false, show_end = false },
	},
	config = function()
		require("ibl").setup()
	end
}
