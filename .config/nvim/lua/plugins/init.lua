local fn = vim.fn

-- Automatically install packer
local install_path = fn.stdpath "data" .. "/site/pack/packer/start/packer.nvim"
if fn.empty(fn.glob(install_path)) > 0 then
  PACKER_BOOTSTRAP = fn.system {
    "git",
    "clone",
    "--depth",
    "1",
    "https://github.com/wbthomason/packer.nvim",
    install_path,
  }
  print "Installing..."
  vim.cmd [[packadd packer.nvim]]
end

vim.cmd [[
  augroup packer_user_config
    autocmd!
    autocmd BufWritePost init.lua source <afile> | PackerSync
  augroup end
]]

local status_ok, packer = pcall(require, "packer")
if not status_ok then
  return
end

packer.init {
  display = {
    open_fn = function()
      return require("packer.util").float { border = "rounded" }
    end,
  },
}



return require('packer').startup(function(use)

  use 'wbthomason/packer.nvim'
  use 'nvim-lua/plenary.nvim'

--Theme
  use {
    'folke/tokyonight.nvim',
     after = 'packer.nvim',
     config = function()
      vim.g.tokyonight_transparent = true
      vim.g.tokyonight_transparent_sidebar = true
      vim.cmd[[colorscheme tokyonight]]
     end
    }

  use {
    'nvim-lualine/lualine.nvim',
    -- after = 'tokyonight.nvim',
    requires = { 'kyazdani42/nvim-web-devicons', opt = true },
    config = function()
      require 'plugins.configs.lualine'
    end
  }

  use {
    'nvim-telescope/telescope.nvim',
    config = function()
      require 'plugins.configs.telescope'
    end

  }

  use {
    'akinsho/bufferline.nvim',
    after = 'nvim-web-devicons',
    config = function()
      require 'plugins.configs.bufferline'
    end
  }

  use {
    'nvim-treesitter/nvim-treesitter',
    run = ':TSUpdate',
    config = function()
      require 'plugins.configs.treesitter'
    end
  }

  use {
    'windwp/nvim-autopairs',
    config = function ()
      require ('nvim-autopairs').setup{}
    end
  }

  use {
    'windwp/nvim-ts-autotag',
    config = function()
      require('nvim-ts-autotag').setup{}
    end
  }

  use {
    'terrortylor/nvim-comment',
    config = function()
      require 'plugins.configs.nvim-comment'
    end
  }

  use {
    'kyazdani42/nvim-tree.lua',
    config = function()
      require 'plugins.configs.nvim-tree'
    end
  }

-- LSP
  use {
    "williamboman/nvim-lsp-installer",
    {
      "neovim/nvim-lspconfig",
      config = function()
        require 'plugins.configs.lspconfig'
      end
    }
  }

--CMP and snips
  use 'hrsh7th/cmp-nvim-lsp'
  use 'hrsh7th/cmp-buffer'
  use 'hrsh7th/cmp-path'
  use 'hrsh7th/cmp-cmdline'
  use {
    'hrsh7th/nvim-cmp',
    after = 'friendly-snippets',
    config = function()
      require 'plugins.configs.cmp'
    end
  }

  use {
    'L3MON4D3/LuaSnip',
    wants = 'friendly-snippets',
    after = 'nvim-cmp',
    config = function ()
      require 'plugins.configs.luasnip'
    end

  }
  use {
    'saadparwaiz1/cmp_luasnip',
    after = 'LuaSnip'
  }
  use {
    'hrsh7th/cmp-nvim-lua',
    after = 'cmp_luasnip',
  }
  use {
    'rafamadriz/friendly-snippets',
    module = 'cmp_nvim_lsp',
    event = 'InsertEnter'
  }

  --Auto setup
  if PACKER_BOOTSTRAP then
    require("packer").sync()
  end

end)
