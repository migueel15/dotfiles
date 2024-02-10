local cmp = require('cmp')
local luasnip = require 'luasnip'
local lspkind = require("lspkind")

require('luasnip.loaders.from_vscode').lazy_load()
luasnip.config.setup {}
cmp.setup {
  formatting = {
    format = lspkind.cmp_format({
      mode = 'text_symbol',
      ellipsis_char = '...',
    })
  },
  snippet = {
    expand = function(args)
      luasnip.lsp_expand(args.body)
    end,
  },
  completion = {
    completeopt = 'menu,menuone,noinsert,noselect',
    keyword_length = 1
  },
  mapping = cmp.mapping.preset.insert {
    ['<C-n>'] = cmp.mapping.select_next_item(),
    ['<C-p>'] = cmp.mapping.select_prev_item(),
    ['<C-b>'] = cmp.mapping.scroll_docs(-4),
    ['<C-f>'] = cmp.mapping.scroll_docs(4),
    ['<C-Space>'] = cmp.mapping.complete {},
    ['<Tab>'] = cmp.mapping.confirm {
      behavior = cmp.ConfirmBehavior.Replace,
      select = true,
    },
    ['<CR>'] = cmp.mapping.confirm {
      behavior = cmp.ConfirmBehavior.Replace,
      select = true,
    },
  },
  sources = {
    { name = 'nvim_lsp' },
    { name = 'nvim_lua' },
    { name = 'luasnip' },
    { name = 'path' },
  },
  sorting = {
    comparators = {
      cmp.config.compare.scopes,
      cmp.config.compare.exact,
      function(e1, e2)
        local priority = { --less appears first
          --[[ Text = ]] 5,
          --[[ Method = ]] 3,
          --[[ Function = ]] 3,
          --[[ Constructor = ]] 4,
          --[[ Field = ]] 2,
          --[[ Variable = ]] 1,
          --[[ Class = ]] 7,
          --[[ Interface = ]] 8,
          --[[ Module = ]] 19,
          --[[ Property = ]] 3,
          --[[ Unit = ]] 11,
          --[[ Value = ]] 4,
          --[[ Enum = ]] 13,
          --[[ Keyword = ]] 14,
          --[[ Snippet = ]] 15,
          --[[ Color = ]] 16,
          --[[ File = ]] 17,
          --[[ Reference = ]] 18,
          --[[ Folder = ]] 19,
          --[[ EnumMember = ]] 20,
          --[[ Constant = ]] 21,
          --[[ Struct = ]] 22,
          --[[ Event = ]] 23,
          --[[ Operator = ]] 24,
          --[[ TypeParameter = ]] 25,
        }
        local kind1 = priority[e1:get_kind()] or 99
        local kind2 = priority[e2:get_kind()] or 99
        return kind1 < kind2
      end,
      cmp.config.compare.sort_text,
    }
  },
  window = {
    completion = {
      border = "rounded",
    },
    documentation = {
      max_height = 15,
      border = "rounded",
    }
  },
  experimental = {
    ghost_text = true,
  },
}
