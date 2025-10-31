pragma Singleton

import Quickshell
import QtQuick
import Quickshell.Bluetooth

Singleton {
    id: root

    readonly property bool available: Bluetooth.adapters.values.length > 0
    readonly property bool enabled: Bluetooth.defaultAdapter?.enabled ?? false
    readonly property bool connected: Bluetooth.devices.values.some(d => d.connected)
    readonly property BluetoothDevice activeDevice: Bluetooth.defaultAdapter?.devices.values.find(device => device.connected) ?? null
    readonly property int activeDeviceCount: Bluetooth.defaultAdapter?.devices.values.filter(device => device.connected).length ?? 0
}
