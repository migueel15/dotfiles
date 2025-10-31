import Quickshell.Services.SystemTray
import QtQuick
import qs.common

Rectangle {
    id: root

    readonly property Repeater items: items

    clip: true
    visible: width > 0 && height > 0 // To avoid warnings about being visible with no size

    height: parent.height
    implicitWidth: rectangleArea.implicitWidth
    color: "transparent"

    MouseArea {
        id: mouseArea
        hoverEnabled: true
        anchors.fill: parent
    }

    Rectangle {
        id: rectangleArea
        anchors.centerIn: parent

        implicitWidth: layout.implicitWidth + 16
        height: parent.height * 0.8
        radius: 10

        color: mouseArea.containsMouse ? Theme.colors.surfaceVariant : Theme.colors.background

        Behavior on color {
            ColorAnimation {
                duration: 150
            }
        }

        Row {
            id: layout
            anchors.centerIn: parent
            spacing: 8

            add: Transition {
                NumberAnimation {
                    properties: "scale"
                    from: 0
                    to: 1
                    duration: 300
                    easing.type: Easing.BezierSpline
                    // easing.bezierCurve:[]
                }
            }

            Repeater {
                id: items
                model: SystemTray.items
                delegate: TrayItem {}
            }
        }
    }

    // Behavior on implicitWidth {
    //     NumberAnimation {
    //         duration: 300
    //         easing.type: Easing.BezierSpline
    //         // easing.bezierCurve: Appearance.anim.curves.emphasized
    //     }
    // }
    //
    // Behavior on implicitHeight {
    //     NumberAnimation {
    //         duration: 300
    //         easing.type: Easing.BezierSpline
    //         // easing.bezierCurve: Appearance.anim.curves.emphasized
    //     }
    // }
}
