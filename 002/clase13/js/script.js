//alert("Hola Mundo desde librería")
//console.log("Hola Mundo desde librería")


function holaMundo(){
    alert("Hola Mundo desde función")
    console.log("Hola Mundo desde función")
}

function saludar(){
    alert("Hola")
}

function despedida(){
    alert("Chao")
}

function sumar(){
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);

    var suma = n1 + n2;

    //alert(n1 + " + " + n2 + " = " + suma)
    var h2 = document.getElementById("res")
    h2.innerHTML = n1 + " + " + n2 + " = " + suma
}

