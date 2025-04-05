-- Thanks For JavaCafe01

local awful = require("awful")
local gears = require("gears")
local beautiful = require("beautiful")
local xresources = require("beautiful.xresources")
local wibox = require("wibox")

local helpers = {}

function helpers.launch_if_not_open(pip, app)
  awful.spawn.easy_async_with_shell("pgrep " .. pip, function(stdout)
    if stdout == "" then
      awful.spawn(app)
    end
  end)
end

function helpers.reload_focused_screen_tags()
  local function readTagsFromFile(filename)
    local file = io.open(filename, "r")
    if file then
      local content = file:read("*all")
      file:close()

      local var1, var2 = content:match("([^,]+),([^,]+)")
      return tonumber(var1), tonumber(var2)
    else
      return 1, 1
    end
  end

  local idxMainScreenTag, idxSecondScreenTag = readTagsFromFile("/tmp/screenTags.txt")
  screen[1].tags[idxMainScreenTag]:view_only()
  if screen[2] then
    screen[2].tags[idxSecondScreenTag]:view_only()
  end
end

function helpers.colorize_text(txt, fg)
  return "<span foreground='" .. fg .. "'>" .. txt .. "</span>"
end

helpers.rrect = function(radius)
  return function(cr, width, height)
    gears.shape.rounded_rect(cr, width, height, radius)
  end
end

helpers.prrect = function(radius, tl, tr, br, bl)
  return function(cr, width, height)
    gears.shape.partially_rounded_rect(cr, width, height, tl, tr, br, bl, radius)
  end
end

helpers.squircle = function(width, height, rate)
  return function(cr, width, height)
    gears.shape.squircle(cr, width, height, rate)
  end
end

helpers.psquircle = function(tl, tr, br, bl, rate)
  return function(cr, width, height)
    gears.shape.partial_squircle(cr, width, height, tl, tr, br, bl, rate, delta)
  end
end

function helpers.add_hover_cursor(w, hover_cursor)
  local original_cursor = "left_ptr"

  w:connect_signal("mouse::enter", function()
    local w = _G.mouse.current_wibox
    if w then
      w.cursor = hover_cursor
    end
  end)

  w:connect_signal("mouse::leave", function()
    local w = _G.mouse.current_wibox
    if w then
      w.cursor = original_cursor
    end
  end)
end

function helpers.vertical_pad(height)
  return wibox.widget({
    forced_height = height,
    layout = wibox.layout.fixed.vertical,
  })
end

function helpers.horizontal_pad(width)
  return wibox.widget({
    forced_width = width,
    layout = wibox.layout.fixed.horizontal,
  })
end

function helpers.prompt(action, textbox, prompt, callback)
  if action == "web_search" then
    awful.prompt.run({
      prompt = prompt,
      bg_cursor = beautiful.search_bar,
      textbox = textbox,
      font = beautiful.font,
      history_path = awful.util.get_cache_dir() .. "/history_web",
      done_callback = callback,
      exe_callback = function(input)
        if not input or #input == 0 then
          return
        end
        awful.spawn.with_shell("google-chrome-stable https://www.google.com/search?q=" .. "'" .. input .. "'")
      end,
    })
  end
end

function colorize_icon(icon, color)
  local tags = gears.color.recolor_image(icon, color)
  return tags
end

return helpers
