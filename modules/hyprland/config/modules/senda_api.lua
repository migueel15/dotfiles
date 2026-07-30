state = {
	keyboard = {
		active = true
	}
}

Senda = {
	keyboard = {}
}

function Senda.keyboard.toggle()
	if state.keyboard.active then
		state.keyboard.active = false
		hl.device({
			name = "razer-razer-huntsman-mini",
			enabled = false
		})
		hl.device({
			name = "at-translated-set-2-keyboard",
			enabled = false
		})
		return
	end

	if not state.keyboard.active then
		state.keyboard.active = true
		hl.device({
			name = "razer-razer-huntsman-mini",
			enabled = true
		})
		hl.device({
			name = "at-translated-set-2-keyboard",
			enabled = true
		})
		return
	end
end
