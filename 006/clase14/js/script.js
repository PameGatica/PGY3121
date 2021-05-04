//alert("Hola Mundo desde librería")
console.log("Hola Mundo desde librería")

function saludar(){
    alert("Hola Mundo desde función")
    console.log("Hola Mundo desde función")
}


function hablar(mensaje){
    //alert(mensaje)
    document.getElementById("spanSaludo").innerHTML = mensaje
    console.log("Hombre dijo " + mensaje)
}

function sumar(){
    var n1 = parseInt(document.getElementById("num1").value)
    
    var n2 = parseInt(document.getElementById("num2").value)

    var suma = n1 + n2

    document.getElementById("res").innerHTML = suma

}