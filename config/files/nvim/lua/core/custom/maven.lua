local M = {}

M.getPackagePath = function()
  return vim.fn.expand("%:h"):gsub("src/main/java/", ""):gsub("/", ".")
end

M.runMvnMain = function()
  local packagePath = M.getPackagePath()
  local fileName = vim.fn.expand("%:t:r")
  local command = "mvn exec:java -Dexec.mainClass=" .. packagePath .. "." .. fileName
  print(command)
  vim.cmd("TermExec go_back=0 cmd='" .. command .. "'")
end

vim.api.nvim_create_user_command("MvnRun", function()
  require("core.custom.maven").runMvnMain()
end, {})

vim.keymap.set({ "n", "t" }, "<leader>jr", "<cmd>MvnRun<cr>", { desc = "Build and run java project" })

return M
