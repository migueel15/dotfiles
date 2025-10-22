import QtQuick
import Quickshell
import QtQuick.Layouts
import Quickshell.Io
import Quickshell.Services.Pipewire
import "../config"
import "../components"
import "../bars/widgets"

PopupWindow {
    id: root
    required property var screen
    property var debug: false

    screen: screen
    width: 700
    height: 550
    visible: root.debug
    color: "transparent"

    Rectangle {
        id: content

        width: root.width
        height: root.height
        y: !root.debug && -root.height

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
            // SystemTray {}
            Text {
                text: "Control Panel"
                color: "white"
                font.pixelSize: 18
            }

            Repeater {
                id: repeater
                model: Pipewire.nodes

                delegate: MouseArea {
                    id: itemSink
                    visible: modelData.isSink

                    property var currentSinkId: Pipewire.defaultAudioSink.id
                    property var thisId: modelData.id
                    property bool isActive: currentSinkId == thisId

                    implicitWidth: sinkText.implicitWidth
                    implicitHeight: sinkText.implicitHeight
                    cursorShape: Qt.PointingHandCursor

                    Process {
                        id: itemProcess
                        running: false
                        command: ["wpctl", "set-default", itemSink.thisId]
                    }

                    onClicked: {
                        itemProcess.running = true;
                    }
                    Text {
                        id: sinkText
                        text: modelData.description
                        color: itemSink.isActive ? Theme.colors.primary : Theme.colors.text
                    }
                }
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
