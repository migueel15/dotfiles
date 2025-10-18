import QtQuick
import Quickshell
import QtQuick.Layouts
import "../config"

PopupWindow {
    id: root
    required property var screen

    screen: screen
    width: 300
    height: 400
    visible: false
    color: "transparent"

    Rectangle {
        id: content

        width: root.width
        height: root.height
        // x: root.width  // Empieza fuera
        y: -root.height

        color: Theme.colors.background

        radius: 10

        // Behavior on x {
        //     NumberAnimation {
        //         duration: 300
        //         easing.type: Easing.OutCubic
        //     }
        // }
        Behavior on y {
            NumberAnimation {
                duration: 300
                easing.type: Easing.OutCubic
            }
        }

        Column {
            anchors.fill: parent
            anchors.margins: 20
            spacing: 15

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
            // content.x = root.width;  // Desliza afuera
            content.y = -root.height;  // Desliza afuera
            closeTimer.start();
        } else {
            visible = true;
            // content.x = 0;
            content.y = 0;
        }
    }
}
