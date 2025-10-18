//@ pragma UseQApplication
import Quickshell
import QtQuick

import "config"
import "./bars"

ShellRoot {
    id: root
    Variants {
        model: Quickshell.screens
        delegate: Component {
            Item {
                required property var modelData
                TopBar {
                    screen: modelData
                }
                SideBar {
                    screen: modelData
                }
                TopRightCorner {
                    screen: modelData
                }
                TopLeftCorner {
                    screen: modelData
                }
                BottomLeftCorner {
                    screen: modelData
                }
                BottomRightCorner {
                    screen: modelData
                }
            }
        }
    }
}
