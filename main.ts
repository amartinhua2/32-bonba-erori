input.onButtonPressed(Button.A, function () {
    bomba.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        bomba.change(LedSpriteProperty.Y, 0.25)
        basic.pause(500)
    }
    if (4 > 0) {
        basic.pause(100)
        basic.showIcon(IconNames.Chessboard)
        basic.pause(500)
        basic.showIcon(IconNames.Diamond)
        basic.pause(500)
        basic.showIcon(IconNames.SmallDiamond)
    }
})
input.onButtonPressed(Button.B, function () {
    bomba.move(1)
})
let bomba: game.LedSprite = null
bomba = game.createSprite(2, 0)
basic.forever(function () {
	
})
