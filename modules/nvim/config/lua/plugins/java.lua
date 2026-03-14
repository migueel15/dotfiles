return {
	{
		"nvim-java/nvim-java",
		config = function()
			require("java").setup()
			vim.lsp.enable("jdtls")
			vim.keymap.set("n", "<leader>jr", "<cmd>JavaRunnerRunMain<cr>", { desc = "Run Java Main" })
		end,
	},
	-- "mfussenegger/nvim-jdtls",
	{
		"eatgrass/maven.nvim",
		cmd = { "Maven", "MavenExec" },
		dependencies = "nvim-lua/plenary.nvim",
		config = function()
			require("maven").setup({
				executable = "./mvnw",
			})
		end,
	},
}
