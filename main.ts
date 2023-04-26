input.onButtonPressed(Button.A, function () {
    comment.comment("Sets the fork to the \"Down\" position")
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
})
basic.showIcon(IconNames.Rollerskate)
