import Quickshell
import QtQuick

PanelWindow {
    anchors {
        top: true
        left: true
        right: true
    }

    implicitHeight: 40

    Text {
        anchors.centerIn: parent
        text: "Hello World"
    }
}
