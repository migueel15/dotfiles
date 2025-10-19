import Quickshell
import QtQuick.Layouts
import QtQuick
import "../config"
import "./widgets"
import "../components"

PanelWindow {
    id: topbar

    exclusionMode: ExclusionMode.Auto

    focusable: false
    aboveWindows: true

    color: Theme.colors.background
    anchors {
        top: true
        left: true
        right: true
    }

    implicitHeight: Theme.barSize

    RowLayout {
        height: parent.height
        spacing: 15
        Text {
            color: Theme.colors.primary
            leftPadding: 15
            text: "󰣇"
            font: Theme.font.base
        }
        Workspaces {}
    }

    Clock {}

    RowLayout {
        spacing: 0
        height: parent.height
        anchors.right: parent.right

        Notifications {}

        ControlPanel {
            onClicked: controlPanelPopup.toggle()
            Layout.rightMargin: 8
            Layout.leftMargin: 8
        }
    }

    ControlPanelPopup {
        id: controlPanelPopup
        anchor.window: topbar
        anchor.rect.x: topbar.width
        anchor.rect.y: topbar.height + 5
    }
}
