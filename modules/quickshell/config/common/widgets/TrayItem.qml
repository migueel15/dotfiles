pragma ComponentBehavior: Bound

import QtQuick
import Quickshell
import Quickshell.Services.SystemTray
import Quickshell.Widgets

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
            const pos = root.mapToItem(root.QsWindow.window.contentItem, 0, root.height);
            menu.anchor.rect.x = pos.x;
            menu.anchor.rect.y = pos.y + 5;
            menu.open();
        }
    }

    QsMenuAnchor {
        id: menu
        menu: root.modelData.menu
        anchor.window: root.QsWindow.window
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
