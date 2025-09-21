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

-- Buffer global para reutilizar
M.output_buf = nil

-- Función para verificar si un archivo contiene método main
M.hasMainMethod = function(filepath)
	local lines = vim.fn.readfile(filepath)
	for _, line in ipairs(lines) do
		if line:match("public%s+static%s+void%s+main") then
			return true
		end
	end
	return false
end

-- Función para buscar Main.java más cercano
M.findNearestMain = function(current_path)
	local dir = vim.fn.fnamemodify(current_path, ":h")

	-- Buscar hacia arriba en el árbol de directorios
	while dir ~= "/" do
		local main_file = dir .. "/Main.java"
		if vim.fn.filereadable(main_file) == 1 then
			return main_file
		end
		dir = vim.fn.fnamemodify(dir, ":h")
	end

	return nil
end

M.runJavaFile = function()
	local filePath = vim.fn.expand("%:p")

	-- Verificar si el archivo actual tiene main, si no buscar Main.java
	if not M.hasMainMethod(filePath) then
		local mainFile = M.findNearestMain(filePath)
		if mainFile then
			filePath = mainFile
		else
			print("No main method found in current file and no Main.java found nearby")
			return
		end
	end

	local command = "java '" .. filePath .. "'"

	-- Ejecutar comando y capturar output
	local output = vim.fn.systemlist(command)

	-- Preparar contenido
	local content = { "Command: " .. command, "", "Output:" }
	for _, line in ipairs(output) do
		table.insert(content, line)
	end

	-- Buscar si ya existe ventana con el buffer
	local existing_win = nil
	if M.output_buf and vim.api.nvim_buf_is_valid(M.output_buf) then
		for _, win in ipairs(vim.api.nvim_list_wins()) do
			if vim.api.nvim_win_get_buf(win) == M.output_buf then
				existing_win = win
				break
			end
		end
	end

	-- Si no existe buffer o no es válido, crear uno nuevo
	if not M.output_buf or not vim.api.nvim_buf_is_valid(M.output_buf) then
		M.output_buf = vim.api.nvim_create_buf(false, true)
		vim.api.nvim_buf_set_option(M.output_buf, 'buftype', 'nofile')
		vim.api.nvim_buf_set_option(M.output_buf, 'bufhidden', 'hide')
		vim.api.nvim_buf_set_option(M.output_buf, 'swapfile', false)
		vim.api.nvim_buf_set_name(M.output_buf, "Java Output")
	end

	-- Actualizar contenido del buffer
	vim.api.nvim_buf_set_lines(M.output_buf, 0, -1, false, content)

	-- Si no hay ventana existente, crear split sin hacer focus
	if not existing_win then
		local current_win = vim.api.nvim_get_current_win()
		vim.cmd('split')
		vim.api.nvim_win_set_buf(0, M.output_buf)
		vim.api.nvim_set_current_win(current_win)
	end
end

vim.api.nvim_create_user_command("MvnRun", function()
	require("core.custom.maven").runMvnMain()
end, {})

vim.api.nvim_create_user_command("JavaRun", function()
	require("core.custom.maven").runJavaFile()
end, {})

vim.keymap.set({ "n", "t" }, "<leader>jr", "<cmd>JavaRun<cr>", { desc = "Run java file" })

return M
