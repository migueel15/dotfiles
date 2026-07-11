local M = {}
local toggleterm_terminal = require("toggleterm.terminal")
local Terminal = toggleterm_terminal.Terminal

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

local function get_or_create_terminal()
	if code_runner_term and vim.api.nvim_buf_is_valid(code_runner_term.bufnr) then
		return code_runner_term
	end

	code_runner_term = toggleterm_terminal.get_all()[1]
	if code_runner_term then
		return code_runner_term
	end

	code_runner_term = Terminal:new({
		direction = "horizontal",
	})

	return code_runner_term
end

local function build_command()
	local ft = vim.bo.filetype
	local file = vim.fn.expand("%")
	local file_root = vim.fn.expand("%:r")

	if file == "" then
		print("No file to run")
		return nil
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

	vim.notify("Ejecutando CodeRunner", vim.log.levels.INFO, { title = "CodeRunner" })

	code_runner_term = get_or_create_terminal()
	if not code_runner_term:is_open() then
		code_runner_term:open()
	end
	code_runner_term:send(cmd, true)
end

vim.keymap.set("n", "<leader>cr", run_current_file, { desc = "Run current file" })

return M
