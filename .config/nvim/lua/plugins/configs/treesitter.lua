local present, treesitter = pcall(require, 'nvim-treesitter.configs')

if not present then
  return
end

local options = {
  ensure_installed = {
    "lua",
    "vim",
    "html",
    "javascript",
    "python",
    "css",
    "bash",
    "json",
    "markdown"
  },

  highlight = {
    enable = true,
    use_languagetree = true,
  },
}
treesitter.setup(options)

