pragma ComponentBehavior: Bound

import QtQuick
// import QtQuick.Layouts
import Quickshell
import Quickshell.Services.SystemTray
import Quickshell.Widgets

// import Qt5Compat.GraphicalEffects

MouseArea {
    id: root

    required property SystemTrayItem modelData

    acceptedButtons: Qt.LeftButton | Qt.RightButton
    implicitWidth: 18
    implicitHeight: 18

    onClicked: event => {
        if (event.button === Qt.LeftButton) {
            modelData.activate();
        } else if (modelData.hasMenu) {
            menu.open();
        }
    }

    QsMenuAnchor {
        id: menu
        menu: root.modelData.menu
        anchor.window: this.QsWindow.window
        anchor.item: root
        anchor.edges: Qt.TopEdge | Qt.RightEdge
        anchor.gravity: Qt.BottomEdge | Qt.LeftEdge
    }

    IconImage {
        id: trayIcon
        width: parent.implicitWidth
        height: parent.implicitHeight
        source: {
            let icon = root.modelData?.icon || "";
            if (!icon)
                return "";

            // Process icon path
            if (icon.includes("?path=")) {
                const [name, path] = icon.split("?path=");
                const fileName = name.substring(name.lastIndexOf("/") + 1);
                return `file://${path}/${fileName}`;
            }
            return icon;
        }
        anchors.centerIn: parent
    }
}
