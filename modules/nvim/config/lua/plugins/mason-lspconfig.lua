return {
  "williamboman/mason-lspconfig.nvim",
  dependencies = {
    "williamboman/mason.nvim",
  },
  config = function()
    require("mason-lspconfig").setup({
      ensure_installed = {
        "lua_ls",
        "pyright",
        "ts_ls",
        "html",
        "cssls",
        "tailwindcss",
        "emmet_ls",
        "jsonls",
        "bashls",
        "marksman",
        "jdtls",
      },
      automatic_installation = true,
    })
  end,
}
