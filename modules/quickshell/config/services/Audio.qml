pragma Singleton

import Quickshell
import QtQuick
import Quickshell.Services.Pipewire

Singleton {
    id: root

    readonly property var nodes: Pipewire.nodes.values.reduce((acc, node) => {
        if (!node.isStream) {
            if (node.isSink) {
                acc.sinks.push(node);
            } else if (node.audio) {
                acc.sources.push(node);
            }
        }
        return acc;
    }, {
        "sources": [],
        "sinks": []
    })

    readonly property PwNode sink: Pipewire.defaultAudioSink
    readonly property PwNode source: Pipewire.defaultAudioSource
    readonly property list<PwNode> sinks: nodes.sinks
    readonly property list<PwNode> sources: nodes.sources

    readonly property alias volume: root._volume
    property real _volume: sink?.audio?.volume ?? 0

    property string audioTheme: "freedesktop"

    readonly property alias muted: root._muted
    property bool _muted: !!sink?.audio?.muted

    readonly property alias inputVolume: root._inputVolume
    property real _inputVolume: source?.audio?.volume ?? 0

    readonly property alias inputMuted: root._inputMuted
    property bool _inputMuted: !!source?.audio?.muted

    readonly property real stepVolume: 0.05

    PwObjectTracker {
        objects: [...root.sinks, ...root.sources]
    }

    Connections {
        target: root.sink?.audio ? root.sink?.audio : null

        function onVolumeChanged() {
            var vol = (root.sink?.audio.volume ?? 0);
            if (isNaN(vol)) {
                return;
            }
            root._volume = vol;
        }

        function onMutedChanged() {
            root._muted = (root.sink?.audio.muted ?? true);
        }
    }

    Connections {
        target: root.source?.audio ? root.source?.audio : null

        function onVolumeChanged() {
            var vol = (root.source?.audio.volume ?? 0);
            if (isNaN(vol)) {
                return;
            }
            root._inputVolume = vol;
        }

        function onMutedChanged() {
            root._inputMuted = (root.source?.audio.muted ?? true);
        }
    }

    function increaseVolume() {
        setVolume(volume + stepVolume);
    }

    function decreaseVolume() {
        setVolume(volume - stepVolume);
    }

    function setVolume(newVolume: real) {
        if (sink?.ready && sink?.audio) {
            sink.audio.muted = false;
            sink.audio.volume = Math.max(0, Math.min(1.0, newVolume));
        } else {}
    }

    function setOutputMuted(muted: bool) {
        if (sink?.ready && sink?.audio) {
            sink.audio.muted = muted;
        } else {}
    }

    function increaseInputVolume() {
        setInputVolume(inputVolume + stepVolume);
    }

    function decreaseInputVolume() {
        setInputVolume(inputVolume - stepVolume);
    }

    function setInputVolume(newVolume: real) {
        if (source?.ready && source?.audio) {
            source.audio.muted = false;
            source.audio.volume = Math.max(0, Math.min(1.0, newVolume));
        } else {}
    }

    function setInputMuted(muted: bool) {
        if (source?.ready && source?.audio) {
            source.audio.muted = muted;
        }
    }

    function setAudioSink(newSink: PwNode): void {
        Pipewire.preferredDefaultAudioSink = newSink;
        root._volume = newSink?.audio?.volume ?? 0;
        root._muted = !!newSink?.audio?.muted;
    }

    function setAudioSource(newSource: PwNode): void {
        Pipewire.preferredDefaultAudioSource = newSource;
        root._inputVolume = newSource?.audio?.volume ?? 0;
        root._inputMuted = !!newSource?.audio?.muted;
    }

    function getOutputIcon() {
        if (muted) {
            return "volume-mute";
        }
        return (volume <= Number.EPSILON) ? "volume-zero" : (volume <= 0.5) ? "volume-low" : "volume-high";
    }

    function getInputIcon() {
        if (inputMuted) {
            return "microphone-mute";
        }
        return (inputVolume <= Number.EPSILON) ? "microphone-mute" : "microphone";
    }

    readonly property string icon: {
        if (root.muted) {
            return "󰝟";
        }

        if (root.volume < 0.33)
            return "󰕿";
        if (root.volume < 0.66)
            return "󰖀";

        return "󰕾";
    }

    function playSystemSound(soundName) {
        const soundPath = `/usr/share/sounds/${root.audioTheme}/stereo/${soundName}.oga`;
        const command = ["ffplay", "-nodisp", "-autoexit", soundPath];
        Quickshell.execDetached(command);
    }

    function muteSink() {
        root.sink.audio.muted = !root.sink.audio.muted;
    }

    function checkActiveDevices() {
        const audios = Pipewire.nodes.values.filter(n => n.isSink && n.isStream !== true && n.audio != null);
        const priorityOrder = ["", ""];

        print(audios.map(s => s.description));
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
