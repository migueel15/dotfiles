return {
  "neovim/nvim-lspconfig",
  event = { "BufReadPre", "BufNewFile" },
  config = function()
    -- Configuración moderna para Neovim 0.11+
    
    -- Configurar servers con vim.lsp.config()
    vim.lsp.config('lua_ls', {
      cmd = { 'lua-language-server' },
      filetypes = { 'lua' },
      root_markers = { { '.luarc.json', '.luarc.jsonc' }, '.git' },
      settings = {
        Lua = {
          diagnostics = {
            globals = { "vim" },
          },
          workspace = {
            library = {
              [vim.fn.expand("$VIMRUNTIME/lua")] = true,
              [vim.fn.stdpath("config") .. "/lua"] = true,
            },
          },
        },
      },
    })

    -- Configurar otros servers
    local servers = {
      { name = 'pyright', cmd = { 'pyright-langserver', '--stdio' }, filetypes = { 'python' } },
      { name = 'ts_ls', cmd = { 'typescript-language-server', '--stdio' }, filetypes = { 'javascript', 'typescript' } },
      { name = 'html', cmd = { 'vscode-html-language-server', '--stdio' }, filetypes = { 'html' } },
      { name = 'cssls', cmd = { 'vscode-css-language-server', '--stdio' }, filetypes = { 'css', 'scss', 'less' } },
      { name = 'tailwindcss', cmd = { 'tailwindcss-language-server', '--stdio' }, filetypes = { 'html', 'css', 'javascript', 'typescript' } },
      { name = 'jsonls', cmd = { 'vscode-json-language-server', '--stdio' }, filetypes = { 'json' } },
      { name = 'bashls', cmd = { 'bash-language-server', 'start' }, filetypes = { 'sh', 'bash' } },
      { name = 'marksman', cmd = { 'marksman', 'server' }, filetypes = { 'markdown' } },
    }

    for _, server in ipairs(servers) do
      vim.lsp.config(server.name, {
        cmd = server.cmd,
        filetypes = server.filetypes,
        root_markers = { '.git' },
      })
    end

    -- Habilitar todos los servers
    local server_names = { 'lua_ls', 'pyright', 'ts_ls', 'html', 'cssls', 'tailwindcss', 'jsonls', 'bashls', 'marksman' }
    for _, name in ipairs(server_names) do
      vim.lsp.enable(name)
    end

    -- Configurar completeopt para mejor experiencia de completado
    vim.opt.completeopt = { "menuone", "noselect", "popup" }

    -- Configurar keymaps y autocomandos con LspAttach
    vim.api.nvim_create_autocmd('LspAttach', {
      callback = function(args)
        local client = vim.lsp.get_client_by_id(args.data.client_id)
        local opts = { buffer = args.buf, noremap = true, silent = true }

        -- LSP keybinds usando las nuevas funciones por defecto
        vim.keymap.set("n", "gR", vim.lsp.buf.references, opts)
        vim.keymap.set("n", "gD", vim.lsp.buf.declaration, opts)
        vim.keymap.set("n", "gd", vim.lsp.buf.definition, opts)
        vim.keymap.set("n", "gi", vim.lsp.buf.implementation, opts)
        vim.keymap.set("n", "gt", vim.lsp.buf.type_definition, opts)
        vim.keymap.set({ "n", "v" }, "<leader>ca", vim.lsp.buf.code_action, opts)
        vim.keymap.set("n", "<leader>rn", vim.lsp.buf.rename, opts)
        vim.keymap.set("n", "<leader>D", vim.diagnostic.open_float, opts)
        vim.keymap.set("n", "<leader>d", vim.diagnostic.open_float, opts)
        vim.keymap.set("n", "[d", vim.diagnostic.goto_prev, opts)
        vim.keymap.set("n", "]d", vim.diagnostic.goto_next, opts)
        vim.keymap.set("n", "K", vim.lsp.buf.hover, opts)

        -- Habilitar completado nativo de LSP
        if client:supports_method('textDocument/completion') then
          vim.lsp.completion.enable(true, client.id, args.buf, {
            autotrigger = true,
            convert = function(item)
              -- Personalizar cómo se muestran los elementos de completado
              return {
                abbr = item.label,
                kind = item.kind and vim.lsp.protocol.CompletionItemKind[item.kind] or '',
                menu = item.detail or '',
              }
            end,
          })
        end

        -- Keymaps para completado
        vim.keymap.set('i', '<C-Space>', function()
          vim.lsp.completion.get()
        end, { buffer = args.buf, desc = 'Trigger LSP completion' })

        -- Auto-format al guardar si el server lo soporta
        if client:supports_method('textDocument/formatting') then
          vim.api.nvim_create_autocmd('BufWritePre', {
            buffer = args.buf,
            callback = function()
              vim.lsp.buf.format({ bufnr = args.buf, id = client.id })
            end,
          })
        end
      end,
    })

    -- Configurar diagnostic signs
    local signs = { Error = " ", Warn = " ", Hint = "󰠠 ", Info = " " }
    for type, icon in pairs(signs) do
      local hl = "DiagnosticSign" .. type
      vim.fn.sign_define(hl, { text = icon, texthl = hl, numhl = "" })
    end
  end,
}