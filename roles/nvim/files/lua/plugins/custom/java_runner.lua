local M = {}

M.get_project_path = function()
	return vim.fn.getcwd()
end

M.get_current_file_path = function()
	return vim.fn.expand("%:p")
end
M.get_project_name = function()
	return vim.fn.fnamemodify(M.get_project_path(), ":t")
end
M.get_file_name = function()
	return vim.fn.expand("%:t:r")
end

M.BuildAndRunJava = function()
	vim.cmd(":w")
	local build_folder = M.get_project_path() .. "/out/production/" .. M.get_project_name()
	local src_folder = M.get_project_path() .. "/src"
	-- os.execute("javac -d " .. build_folder .. " " .. src_folder .. "/**/*.java")
	local build = "javac -d " .. build_folder .. " " .. src_folder .. "/**/*.java"

	-- vim.cmd("TermExec direction=float cmd='" .. "javac -d " .. build_folder .. " " .. src_folder .. "/**/*.java" .. "'")

	-- File relative to working directory
	local relative_path = vim.fn.fnamemodify(vim.fn.expand(M.get_current_file_path()), ':~:.:r')
	-- Find the index of the first occurrence of '/'
	local index = string.find(relative_path, '/')
	-- Extract the substring after the first '/'
	local desiredString = string.sub(relative_path, index + 1)
	-- Convert class file path
	local classFile = string.gsub(desiredString, "/", ".")

	local command = "java -cp " .. build_folder .. " " .. classFile
	vim.cmd("TermExec direction=float cmd='" .. build .. "; clear; " .. command .. "'")
end

vim.api.nvim_create_user_command("RunJava", function()
	require("plugins.custom.java_runner").BuildAndRunJava()
end, {})

vim.keymap.set({ "n", "t" }, "<leader>jc", "<cmd>RunJava<cr>", { desc = "Build and run java project" })

return M
