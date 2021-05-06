$(document).ready(function(){
    $.getJSON(
        'https://api.gael.cloud/general/public/clima/SCVM',
        function(data){
            var estacion = data.Estacion
            var temperatura = data.Temp

            //LOGICA

            $("#estacion").html(estacion)
            $("#temperatura").html(temperatura+'°')
            
        }
    );



});