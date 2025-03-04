return {
	"dsych/blanket.nvim",
	config = function()
		require("blanket").setup({
			report_path = vim.fn.getcwd() .. "/target/site/jacoco/jacoco.xml",
			filetypes = "java",
		})

		-- vim.api.nvim_create_user_command("Coverage", function()
		-- 	require("blanket").report()
		-- end, {})
	end,
}
