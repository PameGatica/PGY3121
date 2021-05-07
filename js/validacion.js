//Funciones auxiliares
function mensajeError(caja, mensaje) {
    $("#" + caja).html(mensaje)
    $("#" + caja).fadeIn()
}

function noError(caja) {
    $("#" + caja).fadeOut()
}
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isTelefono(telefono) {
    var regex = /^\d{6,10}$/;
    return regex.test(telefono);
}


/*Validación de campos*/
var tipoId = "Identificación";
//id

function validaId() {
    if ($("#txtId").val().trim().length == 0) {
        mensajeError("eId", "Ingresa N° de " + tipoId)
        return false
    } else {
        noError("eId")
        return true
    }
}

function validaNombre() {
    if ($("#txtNombre").val().trim().length == 0) {
        mensajeError("eNombre", "Ingresa tu nombre")
        return false
    } else {
        noError("eNombre")
        return true
    }
}

function validaEmail() {
    if ($("#txtEmail").val().trim().length == 0) {
        mensajeError("eEmail", "Ingresa tu correo electrónico")
        return false
    } else {

        if (!isEmail($("#txtEmail").val())) {
            mensajeError("eEmail", "Correo electrónico no válido")
            return false
        } else {
            noError("eEmail")
            return true
        }
    }
}

function validaTelefono() {
    if ($("#txtTelefono").val().trim().length != 0) {
        if (!isTelefono($("#txtTelefono").val())) {
            mensajeError("eTelefono", "Teléfono no válido")
            return false
        } else {
            noError("eTelefono")
            return true
        }
    } else {
        noError("eTelefono")
        return true
    }
}


function validaCiudad() {
    if ($('#cboCiudad').val().trim() === "0") {
        mensajeError("eCiudad", "Selecciona una ciudad de residencia")
        return false
    } else {
        noError("eCiudad")
        return true
    }
}



function validaComentarios(largo) {
    if ($("#txaComentarios").val().trim().length < largo) {
        mensajeError("eComentarios", "Comentario debe tener al menos " + largo + " caracteres")
        return false
    } else {
        noError("eComentarios")
        return true
    }
}



$(document).ready(function () {
    /*Configuración inicial del formulario*/

    //Todos los mensajes de error ocultos
    $(".invalid-feedback").hide()
    //Caja para ingresar n° de identificación deshabilitada
    $('#fsId').prop('disabled', true);



    //Click en Tipo de ID
    $('input[name="tipoId"]').click(function () {
        if ($('input[name="tipoId"]').is(':checked')) {
            $("#etipoId").fadeOut()
            $('#fsId').prop('disabled', false);
            tipoId = $('input[name=tipoId]:checked').val()
        } else {
            $('#fsId').prop('disabled', true);
        }
    });



    //Validar ID
    $("#txtId").blur(function () {
        exito = validaId()
    });

    //Validar Nombre
    $("#txtNombre").blur(function () {
        exito = validaNombre()
    });

    //Validar Email
    $("#txtEmail").blur(function () {
        exito = validaEmail()
    });

    //Validar Telefono
    $("#txtTelefono").blur(function () {
        exito = validaTelefono()
    });

    //Validar Ciudad
    $("#cboCiudad").change(function () {
        exito = validaCiudad()
    });

    //Validar Comentarios
    $("#txaComentarios").blur(function () {
        exito = validaComentarios(50)
    });

    $("#txaComentarios").keyup(function () {
        var totalcaracteres = $("#txaComentarios").val().trim().length
        $("#contChar").text(totalcaracteres)
    });

    //Click en botón reset
    $('button[type="reset"]').click(function () {
        $('#fsId').prop('disabled', true)
        //Todos los mensajes de error ocultos
        $(".invalid-feedback").hide()
    });

    //Envío del formulario
    $("#form1").submit(function () {
        exito = false
        if (
            !validaId() ||
            !validaNombre() ||
            !validaEmail() ||
            !validaTelefono() ||
            !validaCiudad() ||
            !validaComentarios(50)
        ) {
            event.preventDefault()
        }

    });
});

