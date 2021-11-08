window.addEventListener("load", () =>{
    let $inputName = document.querySelector("#firstName"),
    $inputLastName = document.querySelector("#lastName"),
    $email = document.querySelector("#email"),
    $pass = document.querySelector("#password1"),
    $rePass = document.querySelector("#password2"),
    $form = document.querySelector(".form-container")

 $inputNameErrors = document.querySelector("#error-firstName"),
 $inputLastNameErrors = document.querySelector("#error-lastName"),
    $emailErrors = document.querySelector("#error-email"),
    $passErrors = document.querySelector("#error-password1"),
    $rePassErrors = document.querySelector("#error-password2"),
    $allErrors = document.querySelectorAll("small")

     //Expresiones regulares.
     regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
     regExDNI = /^[0-9]{7,8}$/,
     regExTEL = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
     regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
     regExCP = /^[0-9]{4,8}$/;
     
    /* ******VALIDACIONES******* */
 $inputName.addEventListener("blur", () => {
        let $value = $inputName.value.trim();
        switch (true) {
            case !$value:
             $inputName.placeholder = "";
             $inputNameErrors.style.display = "block";
             $inputNameErrors.style.border = "3px orangered solid";
             $inputNameErrors.style.color = "black";
             $inputNameErrors.style.backgroundColor= 'orangered'
             $inputNameErrors.innerHTML = "";
             $inputNameErrors.innerHTML = "El campo está vacío.";
             $inputName.classList.remove("warning");
             $inputName.classList.remove("valid");
             $inputName.classList.add("error");
                document.querySelector(".div-name .fa-check-circle").style.display = "none";
                document.querySelector(".div-name .fa-info-circle").style.display = "block";
                document.querySelector(".div-name .fa-info-circle").style.color = "orangered";
                break;
            case !regExAlpha.test($value):
             $inputName.placeholder = "";
             $inputNameErrors.style.display = "block";
             $inputNameErrors.style.color = "black";
             $inputNameErrors.style.border = "3px orangered solid";
             $inputNameErrors.style.backgroundColor= 'orangered'
             $inputNameErrors.innerHTML = "";
             $inputNameErrors.innerHTML = "Ingresa un nombre válido.";
             $inputName.classList.remove("warning");
             $inputName.classList.remove("valid");
             $inputName.classList.add("error");
                document.querySelector(".div-name .fa-check-circle").style.display = "none";
                document.querySelector(".div-name .fa-info-circle").style.display = "block";
                document.querySelector(".div-name .fa-info-circle").style.color = "orangered";
                break;
            default:
             $inputNameErrors.style.display = "none";
             $inputName.classList.remove("warning");
             $inputName.classList.remove("error");
             $inputName.classList.add("valid");
                document.querySelector(".div-name .fa-check-circle").style.display = "block";
                document.querySelector(".div-name .fa-check-circle").style.color = "green";
                document.querySelector(".div-name .fa-info-circle").style.display = "none";
                break;
        };
    });



    $inputLastName.addEventListener("blur", () => {
        let $value = $inputLastName.value.trim();
        switch (true) {
            case !$value:
             $inputLastName.placeholder = "";
             $inputLastNameErrors.style.display = "block";
             $inputLastNameErrors.style.border = "3px orangered solid";
             $inputLastNameErrors.style.backgroundColor= 'orangered'
             $inputLastNameErrors.innerHTML = "";
             $inputLastNameErrors.innerHTML = "El campo está vacío.";
             $inputLastName.classList.remove("warning");
             $inputLastName.classList.remove("valid");
             $inputLastName.classList.add("error");
                document.querySelector(".div-lastName .fa-check-circle").style.display = "none";
                document.querySelector(".div-lastName .fa-info-circle").style.display = "block";
                document.querySelector(".div-lastName .fa-info-circle").style.color = "orangered";
                break;
            case !regExAlpha.test($value):
             $inputLastName.placeholder = "";
             $inputLastNameErrors.style.display = "block";
             $inputLastNameErrors.style.color = "black";
             $inputLastNameErrors.style.backgroundColor= 'orangered'
             $inputLastNameErrors.innerHTML = "";
             $inputLastNameErrors.innerHTML = "Ingresa un nombre válido.";
             $inputLastNameErrors.style.border = "3px orangered solid";
             $inputLastName.classList.remove("warning");
             $inputLastName.classList.remove("valid");
             $inputLastName.classList.add("error");
                document.querySelector(".div-lastName .fa-check-circle").style.display = "none";
                document.querySelector(".div-lastName .fa-info-circle").style.display = "block";
                document.querySelector(".div-lastName .fa-info-circle").style.color = "orangered";
                break;
            default:
             $inputLastNameErrors.style.display = "none";
             $inputLastName.classList.remove("warning");
             $inputLastName.classList.remove("error");
             $inputLastName.classList.add("valid");
                document.querySelector(".div-lastName .fa-check-circle").style.display = "block";
                document.querySelector(".div-lastName .fa-check-circle").style.color = "green";
                document.querySelector(".div-lastName .fa-info-circle").style.display = "none";
                break;
        };
    });
    

    $email.addEventListener("blur", () => {
        let $value = $email.value.trim();
        switch (true) {
            case !$value:
                $email.placeholder = "";
                $emailErrors.style.display = "block";
                $emailErrors.style.border = "3px orangered solid";
                $emailErrors.style.backgroundColor= 'orangered'
                $emailErrors.style.color = "none";
                $emailErrors.innerHTML = "";
                $emailErrors.innerHTML = "El campo está vacío.";
                $email.classList.remove("error");
                $email.classList.remove("valid");
                $email.classList.add("warning");
                document.querySelector(".div-email .fa-check-circle").style.display = "none";
                document.querySelector(".div-email .fa-info-circle").style.display = "block";
                document.querySelector(".div-email .fa-info-circle").style.color = "orangered";
                break;
            case !regExEmail.test($value):
                $email.placeholder = "";
                $emailErrors.style.display = "block";
                  $emailErrors.style.backgroundColor= 'orangered'
                  $emailErrors.style.border = "3px orangered solid";
                $emailErrors.style.color = "black";
                $emailErrors.innerHTML = "";
                $emailErrors.innerHTML = "Ingresa un email válido.";
                $email.classList.remove("warning");
                $email.classList.remove("valid");
                $email.classList.add("error");
                document.querySelector(".div-email .fa-check-circle").style.display = "none";
                document.querySelector(".div-email .fa-info-circle").style.display = "block";
                document.querySelector(".div-email .fa-info-circle").style.color = "orangered";
                break;
            default:
                $emailErrors.style.display = "none";
                $email.classList.remove("warning");
                $email.classList.remove("error");
                $email.classList.add("valid");
                document.querySelector(".div-email .fa-check-circle").style.display = "block";
                document.querySelector(".div-email .fa-check-circle").style.color = "green";
                document.querySelector(".div-email .fa-info-circle").style.display = "none";
                break;
        };
    });









$pass.addEventListener("blur", ()=>{
    let $value = $pass.value.trim();

    switch (true){
        case !$value:
            $pass.placeholder = "";
            $passErrors.style.display ="block";
            $passErrors.style.border = "3px orangered solid";
             $passErrors.style.color = "none";
            $passErrors.innerHTML = "";
            $passErrors.innerHTML = "El campo está vacio";
            $passErrors.style.backgroundColor= 'orangered'
            $pass.classList.remove("error");
            $pass.classList.remove("valid");
            $pass.classList.add("warning");
            document.querySelector(".div-password1 .fa-check-circle").style.display ="none";
            document.querySelector(".div-password1 .fa-info-cicle").style.display="block";
            document.querySelector(".div-password1 .fa-info-circle").style.color= "orangered";
            break;
            case ($value.length<6 || $value.length>12):
                $pass.placeholder = "";
                $passErrors.style.border = "3px orangered solid";
                $passErrors.style.display = "block";
                $passErrors.style.color = "black";
                $passErrors.style.backgroundColor= 'orangered'
                $passErrors.innerHTML = "";
                $passErrors.innerHTML = "La contraseña debe contener entre 6 y 12 dígitos.";
                $pass.classList.remove("warning");
                $pass.classList.remove("valid");
                $pass.classList.add("error");
                document.querySelector(".div-password1 .fa-info-cicle").style.display= "block";
                document.querySelector(".div-password1 .fa-check-circle").style.display = "none";
                document.querySelector(".div-password1 .fa-info-circle").style.color="orangered";
                break;
            default:
                $passErrors.style.display = "none";
                $pass.classList.remove("warning");
                $pass.classList.remove("error");
                $pass.classList.add("valid");
                document.querySelector(".div-password1 .fa-check-circle").style.display="block";
                document.querySelector(".div-password1 .fa-check-circle").style.color = "green";
                document.querySelector(".div-password1 .fa-info-circle").style.display ="none";
                break;
    }
});

$rePass.addEventListener("blur", ()=>{
    let $value = $rePass.value.trim();

    switch (true) {
        case !$value:
            $rePass.placeholder = "";
            $rePassErrors.style.display ="block";
            $rePassErrors.style.color= "none";
            $rePassErrors.style.border = "3px orangered solid";

            $rePassErrors.innerHTML= "";
            $rePassErrors.innerHTML = "El campo está vacio";
            $rePassErrors.style.backgroundColor= 'orangered'
            $rePass.classList.remove("error");
            $rePass.classList.remove("valid");
            $rePass.classList.add("warning");
            document.querySelector(".div-password2 .fa-check-circle").style.display = "none";
            document.querySelector(".div-password2 .fa-info-circle").style.display= "block";
            document.querySelector(".div-password2 .fa-info-circle").style.color= "orangered";
            break;
        case !($value === $pass.value.trim()):
            $pass.placeholder = "";
            $passErrors.style.display = "block";
            $passErrors.style.color = "black";
            $rePassErrors.style.backgroundColor= 'orangered'
            $passErrors.innerHTML = "";
            $passErrors.innerHTML = "Los datos no coinciden."
            $pass.classList.remove("warning");
            $pass.classList.remove("valid");
            $pass.classList.add("error");
            document.querySelector(".div-password2 .fa-check-circle").style.display = "none";
            document.querySelector(".div-password2 .fa-info-circle").style.display = "block";
            document.querySelector(".div-password2 .fa-info-circle").style.color = "orangered";
            $passErrors.innerHTML = "Los datos no coinciden.";
            $rePass.classList.remove("warning");
            $rePass.classList.remove("valid");
            $rePass.classList.add("error");
            document.querySelector(".div-password2 .fa-check-circle").style.display= "none";
            document.querySelector(".div-password2 .fa-info-circle").style.display= "block";
            document.querySelector(".div-password2 .fa-info-circle").style.color= "orangered";
            break;
    default:
        $rePassErrors.style.display = "none";
        $rePass.classList.remove("warning");
        $rePass.classList.remove("error");
        $rePass.classList.add("valid");
        document.querySelector(".div-password2 .fa-check-circle").style.display ="block";
        document.querySelector(".div-password2 .fa-check-circle").style.display ="green";
        document.querySelector(".div-password2 .fa-info-circle").style.display ="none";
        break;

    };
});

$form.addEventListener("submit", (e)=>{
    let cont = 0;
    for (const element of $form.elements){
        if(element.classList.contains("error")){
            cont++;
        } else if (element === $email && (element.classList.contains("error") || element.classList.contains("warning"))){
            cont++
        }

        if(cont !==0){
            e.preventDefault();
            //apagando mensajes de error
            for (const error of $allErrors){
                error.style.display = "none";
            }
            alert("se encontraron algunos errores");
        }else{
            $form.submit();

        }

    }
});
 //Focus events.
 $inputName.addEventListener("focus", () => {
 $inputNameErrors.style.display = "none";
});
$email.addEventListener("focus", () => {
    $emailErrors.style.display = "none";
});
$pass.addEventListener("focus", () => {
    $passErrors.style.display = "none";
});
$rePass.addEventListener("focus", () => {
    $rePassErrors.style.display = "none";
});
})

