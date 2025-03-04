return {
	"dsych/blanket.nvim",
	config = function()
		-- require("blanket").setup({
		-- 	report_path = vim.fn.getcwd() .. "/target/site/jacoco/jacoco.xml",
		-- 	filetypes = "java",
		-- })
		--
		-- vim.api.nvim_create_user_command("CoverageStart", function()
		-- 	require("blanket").start()
		-- end, {})
		--
		-- vim.api.nvim_create_user_command("CoverageClose", function()
		-- 	require("blanket").stop()
		-- end, {})
	end,
}
