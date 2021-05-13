function getMoneda(codigo) {
    
    var url_api = 'https://api.gael.cloud/general/public/monedas/' + codigo

    $.getJSON(
        //URL DEL API
        url_api
        ,
        //FUNCIÓN QUE PROCESARÁ LA INFO QUE TRAE EL JSON
        function (data) {
            $("#nombreMoneda").html("Valor " + data.Nombre)
            $("#valorMoneda").html("$ " + data.Valor)

        }
    );
}


$(document).ready(function () {

    // $("#nombreMoneda").html("Valor Moneda")
    // $("#valorMoneda").html("100")

    getMoneda("UF")

    var url_api_todas = 'https://api.gael.cloud/general/public/monedas'
    $.getJSON(
        url_api_todas,
        function(data){
            $.each(data, function(i,item){
                $("#monedas").append(
                    '<option value="' + item.Codigo +'">'+ item.Nombre +'</option>'
                );
           }) 
        }
    )

    $("#cambiarMoneda").click(function(){
            var codigo = $("#monedas").val()
            getMoneda(codigo)

    });

});