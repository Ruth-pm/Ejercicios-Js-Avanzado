const form = document.getElementById("form")
const inputs = document.querySelectorAll('#form input');

inputs.forEach((input) => {
	input.addEventListener('keyup', validarForm);
	input.addEventListener('blur', validarForm);
});

function validarForm(e) {
    e.preventDefault();
    validarName();
    validarLastName();
    validarEmail();
    validarPhone();
    validarTextarea();
}  
/* --------------------Validacion Nombre  -----------------------*/
function validarName() {
    let name = document.getElementById("name").value
    let expresionName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    const dname = document.getElementById("name")
    if (expresionName.test(name) && name != "") {
        dname.setAttribute("class", "form-control is-valid")
    }else {
        dname.setAttribute("class", "form-control is-invalid")
    }
}

/* --------------------Validacion Apellido  -----------------------*/
function validarLastName() {
    let LastName = document.getElementById("LastName").value
    let expresionLastName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    const dLastName = document.getElementById("LastName")
    if (expresionLastName.test(LastName) && LastName != "") {
        dLastName.setAttribute("class", "form-control is-valid")
    }else {
        dLastName.setAttribute("class", "form-control is-invalid")
    }
}

/* --------------------Validacion Correo -----------------------*/
function validarEmail() {
    let Email = document.getElementById("Email").value
    let expresion_Email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const d_Email = document.getElementById("Email")
    if (expresion_Email.test(Email)) {
        d_Email.setAttribute("class", "form-control is-valid")
    }else {
        d_Email.setAttribute("class", "form-control is-invalid")
    }
}

/* --------------------Validacion N° Celular  -----------------------*/
function validarPhone() {
    let Phone = document.getElementById("Phone").value
    let expresion_Phone = /^9\d{8}$/ 
    const d_Phone = document.getElementById("Phone")
    if (expresion_Phone.test(Phone)) {
        d_Phone.setAttribute("class", "form-control is-valid")
    }else {
        d_Phone.setAttribute("class", "form-control is-invalid")
    }
}

/* --------------------Validacion Mensaje -----------------------*/
function validarTextarea() {
    let textarea = document.getElementById("textarea").value
    const d_textarea = document.getElementById("textarea")
    if (textarea !== "") {
        d_textarea.setAttribute("class", "form-control is-valid")
    }else {
        d_textarea.setAttribute("class", "form-control is-invalid")
    }
}




