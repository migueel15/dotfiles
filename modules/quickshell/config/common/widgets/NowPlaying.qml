import QtQuick
import QtQuick.Layouts
import Quickshell.Services.Mpris

import qs.common

Rectangle {
    id: root

    readonly property var activePlayer: {
        const players = Mpris.players.values ?? [];
        if (players.length === 0) {
            return null;
        }

        const playingPlayer = players.find(player => player.playbackState === MprisPlaybackState.Playing);
        if (playingPlayer) {
            return playingPlayer;
        }

        const pausedPlayer = players.find(player => player.trackTitle || player.trackArtist);
        return pausedPlayer ?? players[0];
    }

    readonly property bool hasTrack: !!activePlayer && (!!activePlayer.trackTitle || !!activePlayer.trackArtist)
    readonly property bool isPlaying: !!activePlayer && activePlayer.playbackState === MprisPlaybackState.Playing

    implicitWidth: hasTrack ? layout.implicitWidth + 24 : 0
    height: parent.height * 0.8
    radius: 10
    color: Theme.colors.background
    visible: hasTrack

    RowLayout {
        id: layout
        anchors.centerIn: parent
        spacing: 8

        Rectangle {
            Layout.preferredWidth: 20
            Layout.preferredHeight: parent.height
            color: "transparent"

            Text {
                anchors.centerIn: parent
                text: "󰒮"
                color: root.isPlaying ? Theme.colors.text : Theme.colors.surfaceVariant
                font: Theme.font.base
                opacity: root.activePlayer?.canGoPrevious ? 1 : 0.4
            }

            MouseArea {
                anchors.fill: parent
                cursorShape: root.activePlayer?.canGoPrevious ? Qt.PointingHandCursor : Qt.ArrowCursor
                onClicked: {
                    if (root.activePlayer?.canGoPrevious) {
                        root.activePlayer.previous();
                    }
                }
            }
        }

        Rectangle {
            Layout.preferredWidth: 20
            Layout.preferredHeight: parent.height
            color: "transparent"

            Text {
                anchors.centerIn: parent
                text: root.isPlaying ? "󰏤" : "󰐊"
                color: root.isPlaying ? Theme.colors.text : Theme.colors.surfaceVariant
                font: Theme.font.base
                opacity: (root.activePlayer?.canPlay || root.activePlayer?.canPause) ? 1 : 0.4
            }

            MouseArea {
                anchors.fill: parent
                cursorShape: (root.activePlayer?.canPlay || root.activePlayer?.canPause)
                    ? Qt.PointingHandCursor
                    : Qt.ArrowCursor
                onClicked: {
                    if (!root.activePlayer) {
                        return;
                    }

                    if (root.isPlaying && root.activePlayer.canPause) {
                        root.activePlayer.pause();
                        return;
                    }

                    if (!root.isPlaying && root.activePlayer.canPlay) {
                        root.activePlayer.play();
                    }
                }
            }
        }

        Rectangle {
            Layout.preferredWidth: 20
            Layout.preferredHeight: parent.height
            color: "transparent"

            Text {
                anchors.centerIn: parent
                text: "󰒭"
                color: root.isPlaying ? Theme.colors.text : Theme.colors.surfaceVariant
                font: Theme.font.base
                opacity: root.activePlayer?.canGoNext ? 1 : 0.4
            }

            MouseArea {
                anchors.fill: parent
                cursorShape: root.activePlayer?.canGoNext ? Qt.PointingHandCursor : Qt.ArrowCursor
                onClicked: {
                    if (root.activePlayer?.canGoNext) {
                        root.activePlayer.next();
                    }
                }
            }
        }

        Text {
            Layout.preferredWidth: 240
            Layout.maximumWidth: 320
            text: {
                if (!root.activePlayer) {
                    return "";
                }

                if (root.activePlayer.trackTitle && root.activePlayer.trackArtist) {
                    return `${root.activePlayer.trackTitle} - ${root.activePlayer.trackArtist}`;
                }

                return root.activePlayer.trackTitle || root.activePlayer.trackArtist;
            }
            color: root.isPlaying ? Theme.colors.text : Theme.colors.surfaceVariant
            font: Theme.font.base
            elide: Text.ElideRight
        }
    }
}
