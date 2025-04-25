return {
  {
    "rcasia/neotest-java",
    ft = "java",
    dependencies = {
      "mfussenegger/nvim-jdtls",
      "mfussenegger/nvim-dap",
      "rcarriga/nvim-dap-ui",
      "theHamsta/nvim-dap-virtual-text",
    },
  },
  {
    "nvim-neotest/neotest",
    dependencies = {
      "nvim-neotest/nvim-nio",
      "nvim-lua/plenary.nvim",
      "antoinemadec/FixCursorHold.nvim",
      "nvim-treesitter/nvim-treesitter",
    },
    -- opts = {
    --   adapters = {
    --     require("neotest-java"),
    --   },
    -- },
    config = function()
      require("neotest").setup({
        adapters = {
          require("neotest-java"),
        },
      })

      -- Mappings

      vim.keymap.set("n", "<leader>rt", function()
        require("neotest").run.run()
      end, { desc = "Run nearest test", noremap = true, silent = true })

      vim.keymap.set("n", "<leader>ra", function()
        require("neotest").run.run(vim.fn.expand("%"))
      end, { desc = "Run all tests in file", noremap = true, silent = true })
    end,
  },
}
