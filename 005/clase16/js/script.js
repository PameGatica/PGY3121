$(document).ready(function(){

    $("#btnTodoChile").click(function(){
        $.getJSON(
            'https://api.gael.cloud/general/public/clima',
            function(data){
               $.each(data,function(i,item){
                    $("#datos").append(
                        "<tr>"+
                            "<td>"+item.Codigo+"</td> "+
                            "<td>"+item.Estacion+"</td> "+
                            "<td>"+item.Estado+"</td> "+
                            "<td>"+item.Temp+"°</td> "+
                            "<td><button>Ver</button></td>"+
                        "</tr>");

               });
            }
        );

    });


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