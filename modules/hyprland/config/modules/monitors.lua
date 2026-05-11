local mirror = false

hl.monitor({
	output = "desc:BNQ BenQ EX2710Q TBM00955019",
	mode = "2560x1440@165",
	position = "0x0",
})

hl.monitor({
	output = "desc:BNQ ZOWIE XL LCD N1J03633SL0",
	mode = "1920x1080@144",
	position = "auto",
	mirror = mirror and "desc:BNQ BenQ EX2710Q TBM00955019" or ""
})

hl.monitor({
	output = "",
	mode = "preferred",
	position = "auto",
	scale = "1.25"
})
