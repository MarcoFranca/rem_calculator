const div = document.querySelector('#calc')
const form = document.querySelector('#form')
const formNav = document.querySelector('#navigate')

//*******variaveis********

let num = {
    val:"",
    px:16
};

//*****escutadores de eventos******
formNav.addEventListener('click',(e)=>{
    e.preventDefault()
    if (e.target.id === "clear"){
    clear()}
})

form.addEventListener('click',(e)=>{
    e.preventDefault()
    press(e)
})



function clear (){
    num.val = "";
    num.px = 16;
    div.innerHTML = ""
}

function press(e) {
    if (e.target.innerHTML === "="){
        let valRem = parseFloat(num.val) / num.px;
        let valEm = parseFloat(num.val) / num.px;
        let valPoint = parseFloat(num.val) / 1.3333333333333333;
        p.innerHTML = `${valRem} rem
         \n ${valPoint} points`
        num.val = "";
    }else{
        num.val += e.target.innerHTML
        p.innerHTML = `${num.val} px`
    }
}

function createTags() {
}