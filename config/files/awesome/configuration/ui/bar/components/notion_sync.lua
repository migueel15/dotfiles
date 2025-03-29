local awful = require("awful")
local wibox = require("wibox")
local naughty = require("naughty")
local beautiful = require("beautiful")
local gears = require("gears")
local json = require("dkjson")
local capi = { mouse = mouse }

local notion_icon = wibox.widget({
  widget = wibox.widget.imagebox,
  resize = true,
  forced_height = 22,
  forced_width = 22,
  image = beautiful.notion_icon,
})

function trim(s)
  return s:match("^%s*(.-)%s*$")
end

function GetNotionSyncStatus()
  awful.spawn.easy_async_with_shell("docker inspect notion-sync-cv | jq -r  '.[0].State.Status'", function(stdout)
    if trim(stdout) == "running" then
      notion_icon.image = gears.color.recolor_image(beautiful.notion_icon, beautiful.notion_status_color.active)
    else
      notion_icon.image = gears.color.recolor_image(beautiful.notion_icon, beautiful.notion_status_color.inactive)
    end
  end)
end

function ActivateNotionSyncContainer()
  awful.spawn.easy_async("docker start notion-sync-cv", function(stdout)
    GetNotionSyncStatus()
  end)
end

GetNotionSyncStatus()

local notion_widget = wibox.widget({
  {
    notion_icon,
    widget = wibox.container.place,
    valign = "center",
    halign = "center",
  },
  widget = wibox.container.margin,
  left = beautiful.widget_margin,
})

local function createTask(title, date, status)
  return {
    {
      {
        widget = wibox.container.background,
        bg = beautiful.colors.primary,
        fg = beautiful.colors.blue,
        {
          text = title,
          widget = wibox.widget.textbox,
        },
      },
      {
        widget = wibox.container.background,
        fg = beautiful.colors.orange,
        {
          text = " " .. date .. " ",
          widget = wibox.widget.textbox,
        },
      },
      {
        text = status,
        widget = wibox.widget.textbox,
        font = "JetBrainsMono Nerd Font 8",
      },
      layout = wibox.layout.fixed.horizontal,
      spacing = 5,
    },
    margins = 5,
    widget = wibox.container.margin,
  }
end

local listaTareas = wibox.widget({
  layout = wibox.layout.fixed.vertical,
})

local popup = awful.popup({
  widget = {
    {
      {
        widget = wibox.container.margin,
        margins = 10,
        {
          widget = wibox.container.background,
          bg = beautiful.colors.secondary,
          fg = beautiful.colors.primary,
          {
            text = "Tareas Notion",
            vlaign = "center",
            halign = "center",
            widget = wibox.widget.textbox,
          },
        },
      },
      {
        listaTareas,
        widget = wibox.container.margin,
        margins = 10,
      },
      layout = wibox.layout.fixed.vertical,
    },
    margins = 10,
    widget = wibox.container.margin,
  },
  border_color = beautiful.colors.secondary,
  border_width = 1,
  shape = gears.shape.rounded_rect,
  ontop = true,
  visible = false,
  -- placement = function(c)
  -- awful.placement.top_right(c, { margins = { top = 50, right = 10 } })
  -- awful.placement.next_to(popup, { preferred_positions = { "bottom" } })
  -- end,
})

notion_widget:buttons(awful.util.table.join(
  awful.button({}, 1, function()
    if popup.visible then
      popup.visible = false
    else
      popup:move_next_to(capi.mouse.current_widget_geometry, { preferred_positions = { "bottom" } })
      getCVTasks()
      popup.visible = true
    end
  end),
  awful.button({}, 3, function()
    ActivateNotionSyncContainer()
  end)
))

gears.timer({
  timeout = 60,
  autostart = true,
  call_now = true,
  callback = function()
    GetNotionSyncStatus()
  end,
})

awesome.connect_signal("notion:request_status", function()
  GetNotionSyncStatus()
end)

function setCachedValues()
  awful.spawn.easy_async_with_shell("cat /tmp/notion_data.json", function(stdout, stderr, reason, exit_code)
    if exit_code ~= 0 then
      return
    end
    local notion_data = json.decode(stdout)
    local naughty = require("naughty")
    awesome.emit_signal("notion:tasks", notion_data)
  end)
end

function getCVTasks()
  awful.spawn.easy_async_with_shell("cat " .. os.getenv("HOME") .. "/.bw_session", function(bw_session)
    awful.spawn.easy_async_with_shell(
      "export BW_SESSION="
      .. bw_session
      .. " bash "
      .. os.getenv("HOME")
      .. "/.config/awesome/configuration/ui/bar/scripts/notion",
      function(stdout, stderr, reason, exit_code)
        if exit_code ~= 0 then
          naughty.notify({ text = stderr })
          return
        end
        local notion_data = json.decode(stdout)
        awful.spawn.easy_async_with_shell("echo '" .. stdout .. "' > /tmp/notion_data.json", function()
          -- send signal to notion widget
          awesome.emit_signal("notion:tasks", notion_data)
        end)
      end
    )
  end)
end

setCachedValues()
getCVTasks()

popup:connect_signal("mouse::leave", function()
  popup.visible = false
end)

awesome.connect_signal("notion:tasks", function(tasks)
  listaTareas:reset()
  for _, task in ipairs(tasks) do
    listaTareas:add(createTask(task.title, task.date, task.status))
  end
end)

return notion_widget
