#!/usr/bin/env bash

pos="$(hyprctl cursorpos -j | jq -r '"\(.x) \(.y)"')"
hyprctl reload
hyprctl dispatch movecursor $pos

pkill quickshell 
hyprctl  dispatch exec quickshell
