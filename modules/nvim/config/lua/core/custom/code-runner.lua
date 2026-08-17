local M = {}
local toggleterm_terminal = require("toggleterm.terminal")
local Terminal = toggleterm_terminal.Terminal

--- @type table<string, string | function>
local runners = {
	python = "python %",
	go = "go run .",
	odin = "odin run ."
}

local code_runner_term

local function build_make_command()
	local file_dir = vim.fn.expand("%:p:h")
	local makefile = vim.fn.findfile("Makefile", file_dir .. ";")

	if makefile == "" then
		return nil
	end

	local project_root = vim.fn.fnamemodify(makefile, ":p:h")
	return "make --no-print-directory -C " .. vim.fn.shellescape(project_root)
end

local function build_cmake_command()
	local file_dir = vim.fn.expand("%:p:h")
	local cmakelists = vim.fn.findfile("CMakeLists.txt", file_dir .. ";")

	if cmakelists == "" then
		return nil
	end

	local project_root = vim.fn.fnamemodify(cmakelists, ":p:h")
	return "cmake -B build && cmake --build build && ./build/main"
end

local function terminal_is_alive(term)
	if not term then
		return false
	end

	if not term.bufnr or not vim.api.nvim_buf_is_valid(term.bufnr) then
		return false
	end

	if not term.job_id or term.job_id <= 0 then
		return false
	end

	return vim.fn.jobwait({ term.job_id }, 0)[1] == -1
end

local function build_command()
	local ft = vim.bo.filetype
	local file = vim.fn.expand("%")
	local file_root = vim.fn.expand("%:r")

	if file == "" then
		print("No file to run")
		return nil
	end

	local cmake_cmd = build_cmake_command()
	if cmake_cmd then
		return cmake_cmd
	end

	local make_cmd = build_make_command()
	if make_cmd then
		return make_cmd
	end

	local cmd = runners[ft]
	if not cmd then
		print("No runner configured for filetype: " .. ft)
		return nil
	end

	cmd = cmd:gsub("%%:r", file_root)
	cmd = cmd:gsub("%%", file)

	return cmd
end

local function run_current_file()
	if vim.bo.modified then
		vim.cmd("write")
	end

	local cmd = build_command()
	if not cmd then
		return
	end

	vim.notify("Ejecutando CodeRunner", vim.log.levels.INFO, {
		title = "CodeRunner",
	})

	local terminal_existed = terminal_is_alive(code_runner_term)

	if not terminal_existed then
		code_runner_term = Terminal:new({
			direction = "horizontal",
		})

		code_runner_term:open()

		-- Esperamos simplemente a que ToggleTerm cree el channel.
		vim.defer_fn(function()
			code_runner_term:send(cmd, true)
		end, 100)

		return
	end

	if not code_runner_term:is_open() then
		code_runner_term:open()
	end

	-- Hay un proceso anterior ejecutándose.
	code_runner_term:send("\003", false)

	vim.defer_fn(function()
		if terminal_is_alive(code_runner_term) then
			code_runner_term:send(cmd, true)
		end
	end, 100)
end

vim.keymap.set("n", "<leader>cr", run_current_file, { desc = "Run current file" })

return M
