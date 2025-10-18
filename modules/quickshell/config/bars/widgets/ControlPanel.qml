import QtQuick
import QtQuick.Layouts
import "../../config"

Rectangle {
    id: root

    signal clicked
    property string networtIcon: "󰛳"
    property string bluetoothIcon: "󰂯"
    property string powerIcon: "󰐥"

    property var icons: [networtIcon, bluetoothIcon, powerIcon]

    height: parent.height
    width: 100
    color: "transparent"

    Rectangle {
        id: rectangleArea
        anchors.centerIn: parent

        width: parent.width * 0.8
        height: parent.height * 0.8

        radius: 10

        color: mouseArea.containsMouse ? Theme.colors.surfaceVariant : Theme.colors.background

        Behavior on color {
            ColorAnimation {
                duration: 150
            }
        }

        MouseArea {
            id: mouseArea
            hoverEnabled: true
            anchors.fill: parent
            cursorShape: Qt.PointingHandCursor
            onClicked: root.clicked()
        }

        RowLayout {
            anchors.centerIn: parent
            spacing: 8
            Repeater {
                model: root.icons

                delegate: Text {
                    text: modelData
                    font: Theme.font.base
                    color: mouseArea.containsMouse ? Theme.colors.white : Theme.colors.overlay
                }
            }
        }
    }
}
