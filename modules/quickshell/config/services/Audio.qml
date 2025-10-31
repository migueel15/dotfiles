pragma Singleton

import Quickshell
import QtQuick
import Quickshell.Services.Pipewire

Singleton {
    id: root
    property string audioTheme: "freedesktop"
    property PwNode sink: Pipewire.defaultAudioSink
    property real volume: sink.volume
    property PwNode source: Pipewire.defaultAudioSource

    function playSystemSound(soundName) {
        const soundPath = `/usr/share/sounds/${root.audioTheme}/stereo/${soundName}.oga`;
        const command = ["ffplay", "-nodisp", "-autoexit", soundPath];
        Quickshell.execDetached(command);
    }
}
