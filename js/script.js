const p = document.querySelector('#calc')
const form = document.querySelector('#form')
const formNav = document.querySelector('#navigate')

//*******variaveis********

let num = "";

//*****escutadores de eventos******
formNav.addEventListener('click',(e)=>{
    e.preventDefault()
    if (e.target.id === "clear"){
    clear()
    }
})

form.addEventListener('click',(e)=>{
    e.preventDefault()
    press(e)
})



function clear (){
    num = "";
    p.innerHTML = ""
}

function press(e) {
    let val = e.target.innerHTML
    if (val === "="){
        p.innerHTML =""
        let valPx = parseFloat(num) / 16;
        p.append(String(`${valPx} rem`))
    }else{
        num+=val
        p.innerHTML = `${num} px`
    }
}