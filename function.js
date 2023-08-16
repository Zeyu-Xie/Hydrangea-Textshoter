
const widthSetting = document.getElementById("width-setting")
const marginSetting = document.getElementById("margin-setting")
const borderSetting = document.getElementById("border-setting")
const paddingSetting = document.getElementById("padding-setting")
const colorSetting = document.getElementById("color-setting")
const backgroundColorSetting = document.getElementById("backgroundColor-setting")
const fontSizeSetting = document.getElementById("fontSize-setting")
const lineHeightSetting = document.getElementById("lineHeight-setting")
const letterSpacingSetting = document.getElementById("letterSpacing-setting")

const input = document.getElementById("input")
const submit = document.getElementById("submit")
const middle = document.getElementById("middle")
const result = document.getElementById("result")

submit.onclick = () => {

    const width = widthSetting.value
    const margin = marginSetting.value
    const border = borderSetting.value
    const padding = paddingSetting.value
    const color = colorSetting.value
    const backgroundColor = backgroundColorSetting.value
    const fontSize = fontSizeSetting.value
    const letterSpacing = letterSpacingSetting.value
    const lineHeight = lineHeightSetting.value

    middle.style.width=width
    middle.style.margin=margin
    middle.style.border=border
    middle.style.padding=padding
    middle.style.color=color
    middle.style.backgroundColor=backgroundColor
    middle.style.fontSize=fontSize
    middle.style.lineHeight=lineHeight
    middle.style.letterSpacing=letterSpacing

    result.style.width=width

    result.style.display = "none"
    middle.style.display = "block"

    middle.innerText=input.value

    html2canvas(middle).then(canvas => {
        result.src = canvas.toDataURL("image/png")
    }).then(() => {
        middle.style.display = "none"
        result.style.display = "block"
    }).catch(err => {
        console.log("ERROR", err)
    })
}