import QtQuick
import Quickshell
import QtQuick.Layouts

import "../config"

Rectangle {
    id: root

    property string icon: ""
    property bool isHovered: mouseArea.containsMouse
    property int animationDuration: 150
    property var onClick: null

    implicitWidth: 40
    implicitHeight: 40
    radius: 100
    color: isHovered ? Theme.colors.surfaceVariant : Theme.colors.surface

    Behavior on color {
        ColorAnimation {
            duration: root.animationDuration
        }
    }

    MouseArea {
        id: mouseArea
        anchors.fill: parent
        hoverEnabled: true
        cursorShape: Qt.PointingHandCursor
        onClicked: {
            if (root.onClick) {
                root.onClick();
            }
        }
    }

    Text {
        id: textArea

        anchors.centerIn: parent
        text: root.icon
        font: Theme.font.base
        color: root.isHovered ? Theme.colors.white : Theme.colors.text

        Behavior on color {
            ColorAnimation {
                duration: root.animationDuration
            }
        }
    }
}
