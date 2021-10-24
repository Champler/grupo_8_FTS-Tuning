function qs(element) { 
    return document.querySelector(element) 
} 

window.addEventListener('load', function(){
    let $firstName = qs('#firstName')
    let $firstNameError = qs('#firstNameError')
    let $lastName = qs('#lastName')
    let $lastNameError = qs('#lastNameError')

    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/

    $firstName.addEventListener('change', function(){
        
        switch (true) {
            case !$firstName.value.trim():
                $firstNameError.innerHTML = 'El campo nombre es obligatorio'
                break;
            case !regExAlpha.test($firstName.value):
                $firstNameError.innerHTML = 'Ingrese un nombre válido'
                break;    
            default:
                $firstNameError.innerHTML = ""
                break;
        }
    })

    $lastName.addEventListener('change', function(){
        console.log($lastName.value.trim())
        switch (true) {
            case !$lastName.value.trim():
                $lastNameError.innerHTML = 'El campo apellido es obligatorio'
                break;
            case !regExAlpha.test($lastName.value):
                $lastNameError.innerHTML = 'Ingrese un apellido válido'
                
                break;    
            default:
                $lastNameError.innerHTML = ""
                break;
        }
    })
})