return {
	"dsych/blanket.nvim",
	config = function()
		require("blanket").setup({
			report_path = vim.fn.getcwd() .. "/target/site/jacoco/jacoco.xml",
			signs = {
				covered_color = "Added",
			},
		})

		vim.api.nvim_create_user_command("CoverageStart", function()
			require("blanket").start()
		end, {})

		vim.api.nvim_create_user_command("CoverageClose", function()
			require("blanket").stop()
		end, {})

		vim.api.nvim_create_user_command("CoverageRefresh", function()
			-- reload lazy plugin blanket
			vim.cmd("Lazy reload blanket.nvim")
			require("blanket").refresh()
		end, {})
	end,
}
