submit.onclick = () => {
    const widthSetting = document.getElementById("width-setting")
    const heightSetting = document.getElementById("height-setting")
    const marginSetting = document.getElementById("margin-setting")
    const paddingSetting = document.getElementById("padding-setting")
    const backgroundColorSetting = document.getElementById("backgroundColor-setting")
    const backgroundImageSetting = document.getElementById("backgroundImage-setting")
    const borderSetting = document.getElementById("border-setting")
    const borderRadiusSetting = document.getElementById("borderRadius-setting")
    const colorSetting = document.getElementById("color-setting")
    const fontSizeSetting = document.getElementById("fontSize-setting")
    const fontWeightSetting = document.getElementById("fontWeight-setting")
    const textAlignSetting = document.getElementById("textAlign-setting")
    const letterSpacingSetting = document.getElementById("letterSpacing-setting")
    const lineHeightSetting = document.getElementById("lineHeight-setting")

    const input = document.getElementById("input")
    const middle = document.getElementById("middle")
    const result = document.getElementById("result")

    const width = widthSetting.value
    const height = heightSetting.value
    const margin = marginSetting.value
    const padding = paddingSetting.value
    const backgroundColor = backgroundColorSetting.value
    const backgroundImage = backgroundImageSetting.value
    const border = borderSetting.value
    const borderRadius = borderRadiusSetting.value
    const color = colorSetting.value
    const fontSize = fontSizeSetting.value
    const fontWeight = fontWeightSetting.value
    const textAlign = textAlignSetting.value
    const letterSpacing = letterSpacingSetting.value
    const lineHeight = lineHeightSetting.value

    middle.style.width = width
    middle.style.height = height
    middle.style.margin = margin
    middle.style.padding = padding
    middle.style.backgroundColor = backgroundColor
    middle.style.backgroundImage = backgroundImage
    middle.style.border = border
    middle.style.borderRadius = borderRadius
    middle.style.color = color

    middle.style.fontSize = fontSize
    middle.style.fontWeight = fontWeight
    middle.style.textAlign = textAlign
    middle.style.letterSpacing = letterSpacing
    middle.style.lineHeight = lineHeight

    result.style.width = width
    result.style.display = "none"
    middle.style.display = "block"

    middle.innerText = input.value

    domtoimage.toJpeg(middle).then(url => {
        result.src = url
    }).then(() => {
        middle.style.display = "none"
        result.style.display = "block"
    }).catch(err => {
        console.log("ERROR", err)
    })

}