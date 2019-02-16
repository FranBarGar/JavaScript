$(()=>{
    $('input').on('click', mostrarDatos);
});

function mostrarDatos() {
    $.get("http://local.apache/Unit8/4/T002/personas.php")
    .done(llegadaDatos)
    .fail(error);

    function llegadaDatos(datos){
        var selected = JSON.parse(datos)[$(':checked').val()];
        alert(`Nombre: ${selected.nombre} DNI: ${selected.dni}`);
    }

    function error(request, errorMessage){
        alert('Error: ' + errorMessage);
    }
}
