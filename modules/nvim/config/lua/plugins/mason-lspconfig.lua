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
        "ts_ls", -- tsserver se llama ts_ls ahora
        "html",
        "cssls",
        "tailwindcss",
        "emmet_ls",
        "jsonls",
        "bashls",
        "marksman",
      },
      automatic_installation = true,
    })
    -- setup_handlers removido - ya no necesario con vim.lsp.config()
  end,
}