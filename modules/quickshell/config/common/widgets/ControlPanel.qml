import QtQuick
import QtQuick.Layouts
import qs.common
import qs.services

Rectangle {
    id: root

    signal clicked
    property string networtIcon: "󰛳"
    property string bluetoothIcon: Bluetooth.icon
    property string volume: Audio.icon
    property string powerIcon: "󰐥"

    property var icons: [networtIcon, bluetoothIcon, volume, powerIcon]

    height: parent.height
    // width: 100
    implicitWidth: rectangleArea.implicitWidth
    color: "transparent"
    MouseArea {
        id: mouseArea
        hoverEnabled: true
        anchors.fill: parent
        cursorShape: Qt.PointingHandCursor
        acceptedButtons: Qt.LeftButton | Qt.RightButton
        onClicked: event => {
            if (event.button === Qt.LeftButton) {
                root.clicked();
            } else if (event.button === Qt.RightButton) {
                Audio.muteSink();
            }
        }
        onWheel: wheel => {
            if (wheel.angleDelta.y > 0) {
                Audio.incVolume();
            } else {
                Audio.decVolume();
            }
        }
    }

    Rectangle {
        id: rectangleArea
        anchors.centerIn: parent

        // width: parent.width * 0.8
        implicitWidth: rowLayout.implicitWidth + 16
        height: parent.height * 0.8

        radius: 10

        color: mouseArea.containsMouse ? Theme.colors.surfaceVariant : Theme.colors.background

        Behavior on color {
            ColorAnimation {
                duration: 150
            }
        }

        RowLayout {
            id: rowLayout
            anchors.centerIn: parent
            spacing: 8
            Repeater {
                model: root.icons

                delegate: Text {
                    text: modelData
                    font: Theme.font.base
                    color: mouseArea.containsMouse ? Theme.colors.white : Theme.colors.text
                }
            }
        }
    }
}
