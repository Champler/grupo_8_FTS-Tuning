window.addEventListener("load", function () {

    let formulario = document.getElementById("formLogin")
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    let email = document.getElementById("email")
    let emailErr = document.getElementById('emailErr')
    let pass1 = document.getElementById("password")
    let passErr = document.getElementById('passErr')
    email.addEventListener('change', () => {
        switch (true) {
            case !email.value.trim():
                emailErr.innerHTML = 'El campo email es obligatorio'
                break;
            case !regexEmail.test(email.value):
                emailErr.innerHTML = 'Ingrese un email válido'
                break;    
            default:
                email.innerHTML = ""
                break;
        }
    }) 
    pass1.addEventListener('change', () => {
        switch (true) {
            case pass1.value.trim():
                passErr.innerHTML = 'El campo contraseña es obligatorio'
                break;
            case pass1.value.length < 2:
                passErr.innerHTML = 'La contraseñas debe tener entre 6 y 10 caracteres '
                break;
            case pass1.value.length > 10:
                passErr.innerHTML = 'La contraseñas debe tener entre 6 y 10 caracteres'
                break;    
            default:
                pass1.innerHTML = ""
                break;
        }
    })

    formulario.addEventListener("submit", function (e) {

        let errores = []
        
        if (!regexEmail.test(email.value)) {
            errores.push("El email no es un formato valido")
        }

        //VALIDO CONTRASEÑAS
        

        if (pass1.value.length < 2) {
            errores.push("La contraseñas debe tener entre 6 y 10 caracteres")
        }
        if (pass1.value.length > 10) {
            errores.push("La contraseñas debe tener entre 6 y 10 caracteres")
        }
        if(pass1.value == ""){
            errores.push("La contraseña no puede estar vacio")
        }

        //COMPRUEBO LOS ERRORES PARA VALIDAR
        if (errores.length > 0) {
        e.preventDefault();
        let erroresBox = document.getElementById("errores")
        erroresBox.style.display = "block"
        
        let ulErrores = document.querySelector("div.errores ul")
        ulErrores.innerHTML = ""

            for (let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    })
})