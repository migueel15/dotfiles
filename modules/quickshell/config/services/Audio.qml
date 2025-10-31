pragma Singleton

import Quickshell
import QtQuick
import Quickshell.Services.Pipewire

Singleton {
    id: root
    property string audioTheme: "freedesktop"
    property PwNode sink: Pipewire.defaultAudioSink
    property PwNode source: Pipewire.defaultAudioSource

    property real volume: sink?.audio.volume ?? 0
    property bool isMuted: sink?.audio.muted ?? false

    readonly property string icon: {
        if (root.isMuted) {
            return "󰝟";
        }

        if (root.volume < 0.33)
            return "󰕿";
        if (root.volume < 0.66)
            return "󰖀";

        return "󰕾";
    }

    PwObjectTracker {
        objects: [sink, source]
    }

    function playSystemSound(soundName) {
        const soundPath = `/usr/share/sounds/${root.audioTheme}/stereo/${soundName}.oga`;
        const command = ["ffplay", "-nodisp", "-autoexit", soundPath];
        Quickshell.execDetached(command);
    }

    function incVolume() {
        root.sink.audio.volume = Math.min(1, root.sink.audio.volume + 0.05);
    }

    function decVolume() {
        root.sink.audio.volume = Math.min(1, root.sink.audio.volume - 0.05);
    }

    function muteSink() {
        root.sink.audio.muted = !root.sink.audio.muted;
    }
}
