input.onButtonPressed(Button.A, function () {
	
})
function Face_recognition () {
    huskylens.initI2c()
    huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    while (초기화 == 0) {
        huskylens.request()
        if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Heart)
            basic.pause(100)
            basic.clearScreen()
            초기화 = 1
        }
    }
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showString("Hello!")
    basic.pause(100)
    기분 = 0
}
function Tag_recognition () {
    huskylens.initI2c()
    huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
    while (기분 < 100) {
        huskylens.request()
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Happy)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
            basic.pause(2000)
            basic.clearScreen()
            기분 += 1
        }
        if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Happy)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
            basic.pause(2000)
            basic.clearScreen()
            기분 += 1
        }
    }
}
let 기분 = 0
let 초기화 = 0
Face_recognition()
Tag_recognition()
