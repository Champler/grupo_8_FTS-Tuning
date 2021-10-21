window.addEventListener("load", function () {

    let formulario = document.getElementById("formLogin")
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    formulario.addEventListener("submit", function (e) {

        

        let errores = []

        let email = document.getElementById("email")
        if (!regexEmail.test(email.value)) {
            errores.push("El email no es un formato valido")
        }

        //VALIDO CONTRASEÑAS
        let pass1 = document.getElementById("password")

        if (pass1.value.length < 2) {
            errores.push("La contraseñas debe tener entre 4 y 10 caracteres  ")
        }
        if (pass1.value.length > 10) {
            errores.push("La contraseñas debe tener entre 6 y 10 caracteres  ")
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