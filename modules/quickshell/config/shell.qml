//@ pragma UseQApplication
import Quickshell
import QtQuick

import qs.common
import qs.common.bars
import qs.common.bars.components

ShellRoot {
    id: root

    Variants {
        model: Quickshell.screens
        delegate: Component {
            Item {
                required property var modelData

                TopBar {
                    id: topBar
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
