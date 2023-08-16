
html2canvas(document.getElementById("input")).then(canvas=>{
    const url = canvas.toDataURL("image/png")
    console.log(url)
})