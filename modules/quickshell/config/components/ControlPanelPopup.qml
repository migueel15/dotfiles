import QtQuick
import Quickshell
import QtQuick.Layouts
import "../config"
import "../components"

PopupWindow {
    id: root
    required property var screen

    screen: screen
    width: 700
    height: 550
    // visible: false
    visible: true
    color: "transparent"

    Rectangle {
        id: content

        width: root.width
        height: root.height
        // y: -root.height

        color: Theme.colors.background

        radius: 10

        Behavior on y {
            NumberAnimation {
                duration: 300
                easing.type: Easing.OutCubic
            }
        }

        Column {
            id: mainContainer
            anchors.fill: parent
            anchors.margins: 20
            spacing: 15

            ControlPanelUserCard {}
            Text {
                text: "Control Panel"
                color: "white"
                font.pixelSize: 18
            }
        }
    }

    Timer {
        id: closeTimer
        interval: 300
        onTriggered: root.visible = false
    }

    function toggle() {
        if (visible) {
            content.y = -root.height;  // Desliza afuera
            closeTimer.start();
        } else {
            visible = true;
            content.y = 0;
        }
    }
}
