local present, nvim_comment = pcall(require, "nvim_comment")

if not present then
  return
end

local options = {

  comment_empty = false

}

nvim_comment.setup(options)
