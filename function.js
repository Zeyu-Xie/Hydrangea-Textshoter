
// const input=document.getElementById("input")
// const submit=document.getElementById("submit")
// const result=document.getElementById("result")

// const output = () => {
//     html2canvas(document.getElementById("middle")).then(canvas => {
//         const url = canvas.toDataURL("image/png")
//         img.current.src = url
//         a.current.href = url
//     })
// }

console.log(html2canvas)
html2canvas(document.getElementById("input")).then(canvas=>{
    const url = canvas.toDataURL("image/png")
    console.log(url)
})

console.log("666")