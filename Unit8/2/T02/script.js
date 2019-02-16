$(()=>{
    $('button').on('click', mostrarDatos);
});

function mostrarDatos() {
    $.get("http://local.apache/Unit8/2/T02/servidor.php")
    .done(llegadaDatos)
    .fail(error);

    function llegadaDatos(datos){
        $.each(datos, (clave, valor)=>{
            var $tour = $(`.tour-${clave}`);
            $tour.children('.name').html(valor.name);
            $tour.children('.price').html(valor.price);
        });
    }

    function error(request, errorMessage){
        alert('Error: ' + errorMessage);
    }
}
