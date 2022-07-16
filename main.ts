let Left_Detector = 0
let Right_Detector = 0
kitronik.setDistancePerSecond(1)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
basic.forever(function () {
    Right_Detector = pins.digitalReadPin(DigitalPin.P15)
    Left_Detector = pins.digitalReadPin(DigitalPin.P16)
    if (Left_Detector == 0 && Right_Detector == 0) {
        kitronik.stop()
    } else if (Left_Detector == 1 && Right_Detector == 0) {
        kitronik.right()
    } else if (Left_Detector == 0 && Right_Detector == 1) {
        kitronik.left()
    } else if (Left_Detector == 1 && Right_Detector == 1) {
        kitronik.forward()
    }
})
