import QtQuick
import Quickshell

import qs.services

Rectangle {
    width: 100
    height: 100
    Text {
        text: Bluetooth.activeDevice.name
    }
}
