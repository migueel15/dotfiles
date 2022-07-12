while pgrep -x "electron" ; do
  sleep 10
  ~/Scripts/SyncSecondBrain.sh
done
