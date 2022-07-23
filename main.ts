radio.onReceivedNumber(function (receivedNumber) {
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("MOZES")
})
radio.onReceivedString(function (receivedString) {
    soundExpression.giggle.play()
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("NEVIZVANAJ")
})
radio.setGroup(1)
basic.forever(function () {
    music.setVolume(255)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . . # . .
        `)
})
