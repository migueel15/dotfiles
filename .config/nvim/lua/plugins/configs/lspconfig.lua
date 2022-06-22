local present, lspconfig = pcall(require, "lspconfig")

if not present then
  return
end

require("nvim-lsp-installer").setup {
  automatic_installation = true
}

local servers = {
  "tsserver",
  "sumneko_lua",
  "pyright",
  "jsonls",
  "html",
  "cssls",
  "remark_ls",
  "emmet_ls"
}

  -- Setup lspconfig.
local capabilities = require('cmp_nvim_lsp').update_capabilities(vim.lsp.protocol.make_client_capabilities())

for _, lsp in ipairs(servers) do
  lspconfig[lsp].setup
  {
    capabilities = capabilities
  }
end
