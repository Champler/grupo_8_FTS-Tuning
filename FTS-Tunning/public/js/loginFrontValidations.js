

function qs(element){
    return document.querySelector(element)
}

window.addEventListener('load', function (){
let inputEmail = qs ('email')
 let passaword = qs('password');


inputEmail.addEventListener('focus', () => {
    console.log("focus")
})


})