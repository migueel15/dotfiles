local M = {}

M.get_project_path = function()
	local current_file_path = M.get_current_file_path()
	local index = string.find(current_file_path, "/src/")
	local project_path = string.sub(current_file_path, 1, index - 1)
	return project_path
end

M.get_current_file_path = function()
	return vim.fn.expand("%:p")
end
M.get_project_name = function()
	return M.get_project_path():match("([^/]+)$")
end
M.get_file_name = function()
	return vim.fn.expand("%:t:r")
end

-- im in a file. I have to get the path back to src.
M.get_src_path = function()
	local current_file_path = M.get_current_file_path()
	local index = string.find(current_file_path, "/src/")
	local src_path = string.sub(current_file_path, 1, index + 4)
	return src_path
end

M.Build = function()
	local src_path = M.get_src_path()
	local project_path = M.get_project_path()

	local command = "javac "
			.. "-d"
			.. " "
			.. project_path
			.. "/out/production/"
			.. M.get_project_name()
			.. " "
			.. "**/*.java"
	vim.fn.system("cd " .. src_path .. " && " .. command)
	-- print("Build complete")
end

M.BuildAndRunJava = function()
	M.Build()
	local project_path = M.get_project_path()
	-- get path from src to file and change / to .
	local file_path = string.sub(M.get_current_file_path(), string.len(M.get_src_path()) + 1)
	file_path = string.gsub(file_path, "/", ".")
	file_path = string.gsub(file_path, ".java", "")
	print(file_path)
	local command = "java -cp " .. project_path .. "/out/production/" .. M.get_project_name() .. " " .. file_path
	-- spawn a toggleterm and run the command
	vim.cmd("TermExec go_back=0 cmd='cd " .. project_path .. " && " .. command .. "'")
end

vim.api.nvim_create_user_command("JavaBuild", function()
	require("core.custom.java_runner").Build()
end, {})

vim.api.nvim_create_user_command("JavaBuildRun", function()
	require("core.custom.java_runner").BuildAndRunJava()
end, {})

vim.keymap.set({ "n", "t" }, "<leader>jb", "<cmd>JavaBuild<cr>", { desc = "Build java project" })

vim.keymap.set({ "n", "t" }, "<leader>jr", "<cmd>JavaBuildRun<cr>", { desc = "Build and run java project" })

return M
