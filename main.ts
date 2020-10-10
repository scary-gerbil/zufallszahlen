input.onButtonPressed(Button.A, function () {
    R += -15
    G += -15
    B += -15
    basic.setLedColor(basic.rgbw(
    R,
    G,
    B,
    0
    ))
})
let G = 0
let B = 0
let R = 0
R = 255
B = 255
G = 255
basic.forever(function () {
	
})
