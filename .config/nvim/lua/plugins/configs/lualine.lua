local present, lualine = pcall(require, "lualine")

if not present then
   return
end

local options = {
  options = {
    --theme = "tokyonight",
    theme = "auto",

  },

  sections = {
    lualine_a = { "mode" },
    lualine_b = { "filename" },
    lualine_c = { "g:coc_status" },
    lualine_x = { "branch" },
    lualine_y = { "encoding" },
    lualine_z = { "location" }
  }
}

lualine.setup(options)
