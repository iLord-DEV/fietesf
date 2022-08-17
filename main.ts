basic.forever(function () {
    MotionKit.driveForwards(40)
    MotionKit.driveBackwards(40)
    MotionKit.turnRight(360)
    MotionKit.turnLeft(180)
    MotionKit.driveBackwards(60)
    MotionKit.driveForwards(60)
    MotionKit.turnLeft(90)
    MotionKit.driveForwards(77)
    images.iconImage(IconNames.Butterfly).showImage(10)
    MotionKit.driveForwards(30)
    MotionKit.driveBackwards(30)
    MotionKit.driveBackwards(30)
    MotionKit.driveForwards(50)
    MotionKit.driveBackwards(60)
    images.createImage(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `).showImage(0)
})
