CUSTOM_PATH="$HOME/.config/hypr/custom"
SINGLE_PATH=$CUSTOM_PATH/single-setup.conf
DUAL_PATH=$CUSTOM_PATH/dual-setup.conf
CURRENT_PATH=$CUSTOM_PATH/current-setup.conf

monitorNumber=$(hyprctl monitors | grep "Monitor" -c)
echo $monitorNumber

if [ $monitorNumber = 2 ]; then
  cp $DUAL_PATH $CURRENT_PATH
else
  cp $SINGLE_PATH $CURRENT_PATH
fi