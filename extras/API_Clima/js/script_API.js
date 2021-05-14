$(document).ready(
    function () {
        var codigo = "SCSN"
        var url = "https://api.gael.cloud/general/public/clima/" + codigo


        $.getJSON(
            url,
            function (data) {
                $("#estacion").html(data.Estacion)
                $("#estado").html(data.Estado)
                $("#temp").html(data.Temp)
                $("#hum").html("Humedad " + data.Humedad + "%")
            }
        );
    }
);