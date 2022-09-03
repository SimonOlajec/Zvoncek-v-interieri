radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # # #
        . . # . .
        . . # # #
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # . .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.clearScreen()
    basic.showString("MOZEM ?")
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("NEVIZVANAJ")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.showString("?")
    basic.clearScreen()
    basic.showString("MOZEM ?")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("NEMOZES")
})
radio.setGroup(1)
basic.forever(function () {
    music.setVolume(255)
})
