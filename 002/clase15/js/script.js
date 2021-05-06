$(document).ready(function () {

    $("#error1").hide()

    $("#txt1").blur(function () {
        console.log("txt1 perdió el foco")

        //VALIDACIÓN
        if ($("#txt1").val().length < 3) { 
            $("#error1").html("Nombre debe ser mayor a 2 caracteres")
            $("#error1").fadeIn()
        }

    });

    $("#txt1").focus(function () {
        console.log("txt1 ganó el foco")
        $("#error1").fadeOut()
    });
    
    $("#form1").submit(function(){
        console.log("Submit")

        var pass = $("#txt2").val()

        if(pass.length < 8 ){
            $("#error2").html("Contraseña debe tener 8 caracteres")
            event.preventDefault()
        }


    });





});