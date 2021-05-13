function getValorMoneda(codigo) {
    var url = 'https://api.gael.cloud/general/public/monedas/' + codigo;

    $.getJSON(
        url,
        function (data) {
            $("#nombreMoneda").html('Valor de ' + data.Nombre)
            $("#valorMoneda").html('$'+data.Valor)
        }
    )
}


$(document).ready(function () {

    getValorMoneda('USD')


    $.getJSON(
        'https://api.gael.cloud/general/public/monedas/', //URL API
        function (data) {  //QUE HACER CON LOS DATOS
            //Cargar monedas al combobox
            $.each(data, function (i, item) {
                $("#monedas").append(
                    '<option value="' + item.Codigo + '">' + item.Nombre + '</option>'
                );
            })
        }
    );

    $("#verValor").click(function () {
        var codigo = $("#monedas").val()
        getValorMoneda(codigo)
    });






});