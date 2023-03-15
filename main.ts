xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.showIcon(IconNames.Rollerskate)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    xgo.execution_action(xgo.action_enum.Go_prone)
    basic.pause(1000)
    for (let index = 0; index < 3; index++) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
    xgo.move_xgo(xgo.direction_enum.Forward, 100)
    basic.pause(10000)
    xgo.execution_action(xgo.action_enum.Sit_down)
    basic.showIcon(IconNames.Asleep)
    basic.pause(5000)
})
