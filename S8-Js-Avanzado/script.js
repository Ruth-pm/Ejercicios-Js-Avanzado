
$(document).ready(function(){
    console.log("Hola, si funciona")

    const $form = $("#form")
    const $inputs = $("#form input")
    const $select = $("select")
    const $name = $('#name')
    const $LastName = $('#LastName')
    const $Email = $('#Email')
    const $Phone = $('#Phone')
    const $textarea = $('#textarea')
    const $genero = $('#genero')
    const $nacimiento = $('#nacimiento')

    $inputs.removeClass("is-valid is-invalid")
    $select.removeClass("is-valid is-invalid")
    let formulario_correcto = true 

    function validarForm(e) {
        e.preventDefault();
        validarName();
        validarLastName();
        validarEmail();
        validarPhone();
        validarGenero()
        validarFnacimiento()
        validarTextarea();
    }  
    
    /* --------------------Validacion Nombre  -----------------------*/
    function validarName() {
        const expresionName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
        if (expresionName.test($name.val()) && ($name.val()) !== "") {
            $name.addClass("is-valid")
        }else {
            $name.addClass("is-invalid")
            formulario_correcto = false
        }
    }

    /* --------------------Validacion Apellido  -----------------------*/
    function validarLastName() {
        const expresionLastName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
        if (expresionLastName.test($LastName.val()) && ($LastName.val()) !== "") {
            $LastName.addClass("is-valid")
        }else {
            $LastName.addClass("is-invalid")
            formulario_correcto = false
        }
    }

    /* --------------------Validacion Correo -----------------------*/
    function validarEmail() {
        const expresion_Email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        if (expresion_Email.test($Email.val())) {
            $Email.addClass("is-valid")
        }else {
            $Email.addClass("is-invalid") 
            formulario_correcto = false
        }
    }

    /* --------------------Validacion N° Celular  -----------------------*/
    function validarPhone() {
        const expresion_Phone = /^9\d{8}$/ 
        if (expresion_Phone.test($Phone.val())) {
            $Phone.addClass("is-valid")
        }else {
            $Phone.addClass("is-invalid") 
            formulario_correcto = false
        }
    }

    /* --------------------Validacion de Género -----------------------*/
    function validarGenero() {
        if ($genero.val() !== "") {
            $genero.addClass("is-valid")
        }else {
            $genero.addClass("is-invalid") 
            formulario_correcto = false
        }
    }

    /* --------------------Validacion de Fecha de Nacimiento  -----------------------*/
    function validarFnacimiento() {
        if ($nacimiento.val() !== "") {
            $nacimiento.addClass("is-valid")
        }else {
            $nacimiento.addClass("is-invalid") 
            formulario_correcto = false
        }
    }

    /* --------------------Validacion Mensaje -----------------------*/
    function validarTextarea() {
        if ($textarea !== "") {
            $textarea.addClass("is-valid")

        }else {
            $textarea.addClass("is-invalid") 
            formulario_correcto = false
        }
    }

    $name.on("input",validarName);
    $LastName.on("input",validarLastName);
    $Email.on("input",validarEmail)
    $Phone.on("input", validarPhone)
    $genero.on("input", validarGenero)
    $nacimiento.on("input", validarFnacimiento)
    $textarea.on("input", validarTextarea)
    $form.on("submit", validarForm);

    $("button").click(function(){
        if (formulario_correcto = true) {
            alert(`${$name.val()} ${$LastName.val()}, sus datos fueron registrados exitosamente!!`) 
        }
    })
})



