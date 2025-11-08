pragma Singleton

import Quickshell
import QtQuick
import Quickshell.Services.Pipewire

Singleton {
    id: root
    property string audioTheme: "freedesktop"
    property PwNode sink: Pipewire.defaultAudioSink
    property PwNode source: Pipewire.defaultAudioSource
    property var allSinks: Pipewire.nodes.values.filter(n => n.isSink && n.isStream !== true && n.audio !== null)

    property real volume: sink?.audio.volume ?? 0
    property bool isMuted: sink?.audio.muted ?? false

    Connections {
        target: Pipewire
        function onDefaultAudioSinkChanged() {
            if (Pipewire.defaultAudioSink?.audio) {
                root.volume = Pipewire.defaultAudioSink.audio.volume;
            } else {
                root.volume = 0;
            }
        }
    }

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

    function updateVolume(value: real) {
        console.log("Update volume", value);
        Pipewire.defaultAudioSink.audio.volume = value;
    }

    function muteSink() {
        root.sink.audio.muted = !root.sink.audio.muted;
    }

    function checkActiveDevices() {
        const audios = Pipewire.nodes.values.filter(n => n.isSink && n.isStream !== true && n.audio != null);
        const priorityOrder = ["", ""];

        print(audios.map(s => s.description));
    }

    function changeDefaultSink(node: PwNode) {
        const command = ["wpctl", "set-default", node.id];
        Quickshell.execDetached(command);
    }

    function getDisplayName(node: PwNode): string {
        if (node.nickname === "BenQ EX2710Q")
            return "Monitor Principal";

        if (node.nickname === "PRO X Wireless Gaming Headset")
            return "Logitech PRO X";

        if (node.description === "LE-Beats Studio Buds + de Miguel")
            return "Beats Studio Buds +";

        return node.nickname || node.description || "Unknown device";
    }
}
