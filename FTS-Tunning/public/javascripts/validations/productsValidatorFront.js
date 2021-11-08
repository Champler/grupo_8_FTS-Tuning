
function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {
    let $formFcm = qs('#formFcm'),
    $priceFcm = qs('#priceFcm'),
    $priceFcmErrors = qs('#priceFcmErrors'),
    $discountFcm = qs('#discountFcm'),
    $discountFcmErrors = qs('#discountFcmErrors'),
    $nameFcm = qs('#nameFcm'),
    $nameFcmErrors = qs('#nameFcmErrors'),
    $brandFcm = qs('#brandFcm'),
    $brandFcmErrors = qs('#brandFcmErrors'),
    $carModelFcm = qs('#carModelFcm'),
    $carModelFcmErrors = qs('#carModelFcmErrors'),
    $stockFcm = qs('#stockFcm'),
    $stockFcmErrors = qs('#stockFcmErrors'),
    $photoFormularyFcm = qs('#photoFormularyFcm'),
    $photoFormularyFcmErrors = qs('#photoFormularyFcmErrors'),
    $imgPreview = qs('#img-preview'),
    $descriptionFcm = qs('.textarea-description-fcm'),
    $descriptionFcmErrors = qs('#descriptionFcmErrors'),
    $submitErrors = qs('#submitErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExAlphaNumeric = /^[a-zA-Z0-9\sñÑáÁéÉíÍóÓúÚüÜºª"(),;.:+-_!¡¿?"'$%@#/= ]*$/,
    regExNumber = /^([0-9])*$/,
    regExDNI = /^[0-9]{1,2}$/,
    regEx2Numbers2Decimals = /^\d{1,2}(\.\d{1,2})?$/,
    regExNumber2Decimals = /^[0-9]+(\\,[0-9]{1,2})?$/;
    
    // Validación del precio
    $priceFcm.addEventListener('blur', function() {
        console.log("-> " + $priceFcm.value.trim());
        switch (true) {
            case !$priceFcm.value.trim():
                $priceFcmErrors.innerHTML = 'El campo precio es obligatorio'
                $priceFcm.classList.remove('is-valid')
                $priceFcm.classList.add('is-invalid')
                break;
            case !regExNumber2Decimals.test($priceFcm.value):                       //  Numero maximo 2147483647
                $priceFcmErrors.innerHTML = 'Ingresa solo números sin decimales'
                $priceFcm.classList.remove('is-valid')
                $priceFcm.classList.add('is-invalid')
                break;
            case $priceFcm.value > 2147483647:
                $priceFcmErrors.innerHTML = 'Ingresa un número menor a 2147483647'
                $priceFcm.classList.remove('is-valid')
                $priceFcm.classList.add('is-invalid')
                break;
            default:
                $priceFcm.classList.remove('is-invalid')
                $priceFcm.classList.add('is-valid')
                $priceFcmErrors.innerHTML = ""
                break;
        }
    })
    // Validación del descuento
    $discountFcm.addEventListener('blur', function() {
        console.log("-> " + $discountFcm.value.trim());
        switch (true) {
            case !$discountFcm.value.trim():
                $discountFcmErrors.innerHTML = 'El campo descuento es obligatorio'
                $discountFcm.classList.remove('is-valid')
                $discountFcm.classList.add('is-invalid')
                break;
            case !regExDNI.test($discountFcm.value):
                $discountFcmErrors.innerHTML = 'Ingresa un número de 0 a 99'
                $discountFcm.classList.remove('is-valid')
                $discountFcm.classList.add('is-invalid')
                break;
            case $discountFcm.value > 99:
                $discountFcmErrors.innerHTML = 'Ingresa un número de 0 a 99'
                $discountFcm.classList.remove('is-valid')
                $discountFcm.classList.add('is-invalid')
                break;
            default:
                $discountFcm.classList.remove('is-invalid')
                $discountFcm.classList.add('is-valid')
                $discountFcmErrors.innerHTML = ""
                break;
        }
    })
    // Validación del nombre del producto
    $nameFcm.addEventListener('blur', function() {
        console.log("-> " + $nameFcm.value.trim());
        switch (true) {
            case !$nameFcm.value.trim():
                $nameFcmErrors.innerHTML = 'El campo nombre es obligatorio'
                $nameFcm.classList.remove('is-valid')
                $nameFcm.classList.add('is-invalid')
                break;
            case $nameFcm.value.trim().length < 5:
                $nameFcmErrors.innerHTML = 'Ingrese más de 5 caracteres'
                $nameFcm.classList.remove('is-valid')
                $nameFcm.classList.add('is-invalid')
                break;
            case $nameFcm.value.trim().length > 100:
                $nameFcmErrors.innerHTML = 'Ingrese hasta 100 caracteres'
                $nameFcm.classList.remove('is-valid')
                $nameFcm.classList.add('is-invalid')
                break;
            case !regExAlphaNumeric.test($nameFcm.value):
                $nameFcmErrors.innerHTML = 'Ingresa un nombre válido'
                $nameFcm.classList.remove('is-valid')
                $nameFcm.classList.add('is-invalid')
                break;
            default:
                $nameFcm.classList.remove('is-invalid')
                $nameFcm.classList.add('is-valid')
                $nameFcmErrors.innerHTML = ""
                break;
        }
    })
    // Validación de la marca
    $brandFcm.addEventListener('blur', function() {
        console.log("-> " + $brandFcm.value.trim());
        switch (true) {
            case !$brandFcm.value.trim():
                $brandFcmErrors.innerHTML = 'El campo marca es obligatorio'
                $brandFcm.classList.remove('is-valid')
                $brandFcm.classList.add('is-invalid')
                break;
            case $brandFcm.value.trim().length < 3:
                $brandFcmErrors.innerHTML = 'Ingrese más de 3 caracteres'
                $brandFcm.classList.remove('is-valid')
                $brandFcm.classList.add('is-invalid')
                break;
            case $brandFcm.value.trim().length > 40:
                $brandFcmErrors.innerHTML = 'Ingrese hasta 40 caracteres'
                $brandFcm.classList.remove('is-valid')
                $brandFcm.classList.add('is-invalid')
                break;
            case !regExAlphaNumeric.test($brandFcm.value):
                $brandFcmErrors.innerHTML = 'Ingresa una marca válida'
                $brandFcm.classList.remove('is-valid')
                $brandFcm.classList.add('is-invalid')
                break;
            default:
                $brandFcm.classList.remove('is-invalid')
                $brandFcm.classList.add('is-valid')
                $brandFcmErrors.innerHTML = ""
                break;
        }
    })
    // Validación del modelo
    $carModelFcm.addEventListener('blur', function() {
        console.log("-> " + $carModelFcm.value.trim());
        switch (true) {
            case !$carModelFcm.value.trim():
                $carModelFcmErrors.innerHTML = 'El campo modelo es obligatorio'
                $carModelFcm.classList.remove('is-valid')
                $carModelFcm.classList.add('is-invalid')
                break;
            case $carModelFcm.value.trim().length < 3:
                $carModelFcmErrors.innerHTML = 'Ingrese más de 3 caracteres'
                $carModelFcm.classList.remove('is-valid')
                $carModelFcm.classList.add('is-invalid')
                break;
            case $carModelFcm.value.trim().length > 40:
                $carModelFcmErrors.innerHTML = 'Ingrese hasta 40 caracteres'
                $carModelFcm.classList.remove('is-valid')
                $carModelFcm.classList.add('is-invalid')
                break;
            case !regExAlphaNumeric.test($carModelFcm.value):
                $carModelFcmErrors.innerHTML = 'Ingresa un modelo válido'
                $carModelFcm.classList.remove('is-valid')
                $carModelFcm.classList.add('is-invalid')
                break;
            default:
                $carModelFcm.classList.remove('is-invalid')
                $carModelFcm.classList.add('is-valid')
                $carModelFcmErrors.innerHTML = ""
                break;
        }
    })
    // Validación del stock
    $stockFcm.addEventListener('blur', function() {
        console.log("-> " + $stockFcm.value.trim());
        switch (true) {
            case !$stockFcm.value.trim():
                $stockFcmErrors.innerHTML = 'El campo stock es obligatorio'
                $stockFcm.classList.remove('is-valid')
                $stockFcm.classList.add('is-invalid')
                break;
            case !regExNumber.test($stockFcm.value):
                $stockFcmErrors.innerHTML = 'Ingresa solo números sin decimales'
                $stockFcm.classList.remove('is-valid')
                $stockFcm.classList.add('is-invalid')
                break;
            case $stockFcm.value > 2147483647:
                $stockFcmErrors.innerHTML = 'Ingresa un número menor a 2147483647'
                $stockFcm.classList.remove('is-valid')
                $stockFcm.classList.add('is-invalid')
                break;
            default:
                $stockFcm.classList.remove('is-invalid')
                $stockFcm.classList.add('is-valid')
                $stockFcmErrors.innerHTML = ""
                break;
        }
    })
    // Validación de las fotos
    $photoFormularyFcm.addEventListener('change', 
    function fileValidation(){
        let filePath = $photoFormularyFcm.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $photoFormularyFcmErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $photoFormularyFcm.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            // Image preview
            console.log($photoFormularyFcm.files);
            if($photoFormularyFcm.files && $photoFormularyFcm.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($photoFormularyFcm.files[0]);
                $photoFormularyFcmErrors.innerHTML = '';
                $photoFormularyFcm.classList.remove('is-invalid')
            }
            if($photoFormularyFcm.files && $photoFormularyFcm.files[1]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML += '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($photoFormularyFcm.files[1]);
                $photoFormularyFcmErrors.innerHTML = '';
                $photoFormularyFcm.classList.remove('is-invalid')
            }
            if($photoFormularyFcm.files && $photoFormularyFcm.files[2]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML += '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($photoFormularyFcm.files[2]);
                $photoFormularyFcmErrors.innerHTML = '';
                $photoFormularyFcm.classList.remove('is-invalid')
            }
        }
    })
    // Validación de la descripción
    $descriptionFcm.addEventListener('blur', function() {
        console.log("-> " + $descriptionFcm.value);
        switch (true) {
            case !$descriptionFcm.value.trim():
                $descriptionFcmErrors.innerHTML = 'La descripción es obligatoria'
                $descriptionFcm.classList.remove('is-valid')
                $descriptionFcm.classList.add('is-invalid')
                break;
            case $descriptionFcm.value.trim().length < 20:
                $descriptionFcmErrors.innerHTML = 'Ingrese más de 20 caracteres'
                $descriptionFcm.classList.remove('is-valid')
                $descriptionFcm.classList.add('is-invalid')
                break;
            case !regExAlphaNumeric.test($descriptionFcm.value):
                $descriptionFcmErrors.innerHTML = 'Ingresa un nombre válido'
                $descriptionFcm.classList.remove('is-valid')
                $descriptionFcm.classList.add('is-invalid')
                break;
        
            default:
                $descriptionFcm.classList.remove('is-invalid')
                $descriptionFcm.classList.add('is-valid')
                $descriptionFcmErrors.innerHTML = ""
                break;
        }
    })
    // Validación del submit
    $formFcm.addEventListener('submit',function(event){
        let error = false;
        event.preventDefault()
        console.log("<<<< $formFcm.elements >>>>")
        console.log($formFcm.elements)
        let elementosForm = this.elements
        //////////////////////////////////////////////////////////////////////// hasta "Si hay errores"
        let auxArray = this.elements
        console.log("<<<< auxArray >>>>")
        console.log(auxArray)
        let elementosForm = auxArray.forEach(element => {
            if(!(element.$photoFormularyFcm)){
                auxArray.push(element)
            }else{
                if(element.$photoFormularyFcm.value){
                    auxArray.push(element)
                }
            }
        })
        console.log("<<<< auxArray >>>>")
        console.log(auxArray)
        /* let elementosForm = auxArray; */
        console.log("<<<< elementosForm >>>>")
        console.log(elementosForm)
        //   Si hay errores
        for (let index = 0; index < elementosForm.length-1; index++) {
            if(elementosForm[index].value == ""){
                elementosForm[index].classList.add('is-invalid');
                error = true;
                if(!$photoFormularyFcm.value){
                    $photoFormularyFcmErrors.innerHTML = '';                        //  prueba
                    $photoFormularyFcm.classList.remove('is-invalid');             //  prueba
                    $photoFormularyFcm.classList.add('is-valid');                  //  prueba
                    error = false;                                                  //  prueba
                }
                $submitErrors.innerHTML = "Los campos señalados son obligatorios";
                //console.log("<<<<  >>>>")
                //console.log(elementosForm);                                 //  prueba
            }
        }
        //   Si todo está OK!!!
        if(!error){
            console.log('Todo bien');
            $formFcm.submit()
        }

    })

})