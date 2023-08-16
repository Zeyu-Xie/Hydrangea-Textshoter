



const input=document.getElementById("input")
const submit = document.getElementById("submit")
const middle = document.getElementById("middle")
const result = document.getElementById("result")

submit.onclick = () => {

    middle.innerText=input.value
    result.style.display="none"
    middle.style.display="block"
    html2canvas(middle).then(canvas => {
        result.src = canvas.toDataURL("image/png")
    }).then(()=>{
        middle.style.display="none"
        result.style.display="block"
    }).catch(err=>{
        console.log("ERROR",err)
    })
}