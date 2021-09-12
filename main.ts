bitbot.select_model(BBModel.XL)
basic.forever(function () {
    bitbot.move(BBMotor.Right, BBDirection.Reverse, 10)
    bitbot.move(BBMotor.Left, BBDirection.Forward, 60)
})
