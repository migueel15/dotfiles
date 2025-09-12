#!/bin/bash

STATE_FILE="/tmp/monitor_mode"
PRIMARY="desc:BNQ BenQ EX2710Q"
SECONDARY="desc:BNQ ZOWIE XL"

if [ -f "$STATE_FILE" ] && [ "$(cat "$STATE_FILE")" = "mirror" ]; then
    # Volver a normal
    hyprctl reload
    rm "$STATE_FILE"  # o echo "extended" > "$STATE_FILE"
    notify-send "Monitor" "Configuración por defecto restaurada"
else
    # Ir a espejo
    pkill waybar
    hyprctl keyword monitor "$SECONDARY,preferred,auto,auto,mirror,$PRIMARY"
    echo "mirror" > "$STATE_FILE"
    sleep 2
    waybar &
    notify-send "Monitor" "Modo espejo activado"
fi
