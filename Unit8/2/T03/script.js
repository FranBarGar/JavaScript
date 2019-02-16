$(()=>{
    $('button').on('click', mostrarDatos);
});

function mostrarDatos() {
    $.get("http://local.apache/Unit8/2/T03/servidor.php")
    .done(llegadaDatos)
    .fail(error);

    function llegadaDatos(datos){
        $.each(datos, (clave, valor)=>{
            $('<li>')
            .html(`${valor.flightNumber}-${valor.time}`)
            .appendTo('.flight-times');
        });
    }

    function error(request, errorMessage){
        alert('Error: ' + errorMessage);
    }
}
