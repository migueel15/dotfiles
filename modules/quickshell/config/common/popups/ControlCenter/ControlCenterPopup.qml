import QtQuick
import Quickshell
import QtQuick.Layouts
import Quickshell.Io
import Quickshell.Services.Pipewire

import qs.common
import qs.common.components
import qs.common.widgets
import qs.common.popups.ControlCenter.components

Item {
    id: root

    property bool isOpen: false
    property int targetX: 0
    property int targetY: 0

    width: 700
    height: 550

    x: targetX
    y: isOpen ? targetY : -height

    visible: opacity > 0
    opacity: isOpen ? 1 : 0

    Behavior on y {
        NumberAnimation {
            duration: 300
            easing.type: Easing.OutCubic
        }
    }

    Behavior on opacity {
        NumberAnimation {
            duration: 200
            easing.type: Easing.InOutQuad
        }
    }

    function open() {
        isOpen = true;
    }

    function close() {
        isOpen = false;
    }

    Rectangle {
        id: content
        anchors.fill: parent
        color: Theme.colors.background
        radius: 10

        Column {
            id: mainContainer
            anchors.fill: parent
            anchors.margins: 20
            spacing: 15

            UserCard {}
            AudioControl {}
            Text {
                text: "Control Panel"
                color: "white"
                font.pixelSize: 18
            }

            Repeater {
                id: repeater
                model: Pipewire.nodes
                property var currentSinkId: Pipewire.defaultAudioSink?.id

                delegate: MouseArea {
                    id: itemSink
                    visible: modelData.isSink

                    property var thisId: modelData.id
                    property bool isActive: repeater.currentSinkId == thisId

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
}
