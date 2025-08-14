return {
  "neovim/nvim-lspconfig",
  dependencies = {
    -- Automatically install LSPs to stdpath for neovim
    { "williamboman/mason.nvim", config = true },
    "williamboman/mason-lspconfig.nvim",
    "jay-babu/mason-null-ls.nvim",
    "nvimtools/none-ls.nvim",
    "jay-babu/mason-nvim-dap.nvim",

    -- Additional lua configuration, makes nvim stuff amazing!
    "folke/neodev.nvim",
  },
  config = function()
    local on_attach = function(_, bufnr)
      local nmap = function(keys, func, desc)
        if desc then
          desc = "LSP: " .. desc
        end

        vim.keymap.set("n", keys, func, { buffer = bufnr, desc = desc })
      end

      nmap("<leader>rn", vim.lsp.buf.rename, "[R]e[n]ame")
      nmap("<leader>ca", vim.lsp.buf.code_action, "[C]ode [A]ction")

      nmap("gd", require("telescope.builtin").lsp_definitions, "[G]oto [D]efinition")
      nmap("gr", require("telescope.builtin").lsp_references, "[G]oto [R]eferences")
      nmap("gI", require("telescope.builtin").lsp_implementations, "[G]oto [I]mplementation")
      nmap("<leader>D", require("telescope.builtin").lsp_type_definitions, "Type [D]efinition")
      nmap("<leader>ds", require("telescope.builtin").lsp_document_symbols, "[D]ocument [S]ymbols")
      nmap("<leader>ws", require("telescope.builtin").lsp_dynamic_workspace_symbols, "[W]orkspace [S]ymbols")

      -- See `:help K` for why this keymap
      nmap("K", vim.lsp.buf.hover, "Hover Documentation")
      -- nmap("<C-k>", vim.lsp.buf.signature_help, "Signature Documentation")

      -- Lesser used LSP functionality
      nmap("gD", vim.lsp.buf.declaration, "[G]oto [D]eclaration")
      nmap("<leader>wa", vim.lsp.buf.add_workspace_folder, "[W]orkspace [A]dd Folder")
      nmap("<leader>wr", vim.lsp.buf.remove_workspace_folder, "[W]orkspace [R]emove Folder")
      nmap("<leader>wl", function()
        print(vim.inspect(vim.lsp.buf.list_workspace_folders()))
      end, "[W]orkspace [L]ist Folders")

      -- Create a command `:Format` local to the LSP buffer
      vim.api.nvim_buf_create_user_command(bufnr, "Format", function(_)
        vim.lsp.buf.format()
      end, { desc = "Format current buffer with LSP" })
    end

    -- set glsl analyzer
    require("lspconfig").glsl_analyzer.setup({})

    -- mason-lspconfig requires that these setup functions are called in this order
    -- before setting up the servers.
    require("mason").setup()

    -- Setup DAP config
    require("mason-nvim-dap").setup({
      ensure_installed = {
        "python",
        "java",
        "delve",
      },
      handlers = {},
    })
    require("mason-lspconfig").setup()

    require("mason-null-ls").setup({
      automatic_installation = true,
      ensure_installed = {
        "goimports",
        "csharpier",
        "stylua",
        "isort",
      },
    })

    local null_ls = require("null-ls")
    null_ls.setup({
      sources = {
        null_ls.builtins.formatting.stylua,
        null_ls.builtins.formatting.csharpier,
        null_ls.builtins.formatting.yamlfmt,
        null_ls.builtins.formatting.biome,
        null_ls.builtins.formatting.goimports,
        null_ls.builtins.code_actions.gomodifytags,
        null_ls.builtins.formatting.isort,
        null_ls.builtins.diagnostics.yamllint,
      },
    })

    local servers = {
      texlab = {},
      biome = {},
      clangd = {},
      cmake = {},
      gopls = {},
      pyright = {},
      ts_ls = {},
      html = { filetypes = { "html", "twig", "hbs" } },
      emmet_ls = {
        filetypes = {
          "css",
          "eruby",
          "html",
          "javascript",
          "javascriptreact",
          "less",
          "sass",
          "scss",
          "svelte",
          "pug",
          "typescriptreact",
          "vue",
        },
      },
      cssls = {},
      jdtls = {},
      sqlls = {},
      tailwindcss = {},
      yamlls = {},
      -- eslint = {},
      marksman = {},
      angularls = {},
      jsonls = {},
      lemminx = {},
      lua_ls = {
        Lua = {

          workspace = {
            library = {
              "/usr/share/nvim/runtime/lua",
              "/usr/share/nvim/runtime/lua/lsp",
              "/usr/share/awesome/lib",
            },
          },
          diagnostics = {
            globals = {
              "awesome",
              "awful",
              "client",
              "screen",
              "root",
              "mouse",
              "tag",
            },
          },
          completion = {
            enable = true,
          },
          telemetry = { enable = false },
        },
      },
    }

    -- setup java
    require("java").setup()

    require("neodev").setup()

    -- nvim-cmp supports additional completion capabilities, so broadcast that to servers
    local capabilities = vim.lsp.protocol.make_client_capabilities()

    -- Ensure the servers above are installed
    local mason_lspconfig = require("mason-lspconfig")

    mason_lspconfig.setup({
      ensure_installed = vim.tbl_keys(servers),
    })

    mason_lspconfig.setup_handlers({
      function(server_name)
        require("lspconfig")[server_name].setup({
          capabilities = capabilities,
          on_attach = on_attach,
          settings = servers[server_name],
          filetypes = (servers[server_name] or {}).filetypes,
        })
      end,
    })

    -- Setup dianostics
    vim.diagnostic.config({ virtual_text = true, signs = true })
    local signs = { Error = " ", Warn = " ", Hint = " ", Info = " " }
    for type, icon in pairs(signs) do
      local hl = "DiagnosticSign" .. type
      vim.fn.sign_define(hl, { text = icon, texthl = hl, numhl = "" })
    end
  end,
}
