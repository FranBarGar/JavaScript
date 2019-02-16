$(()=>{
    $('#boton').on('click', mostrarDatos);
});

function mostrarDatos() {
    $.get("http://local.apache/Unit8/3/servidor.php")
    .done(llegadaDatos)
    .fail(error);

    function llegadaDatos(datos){
        $.each(datos, (clave, valor)=>{
            $.each(valor, (clave, valor)=>{
                $('<li>')
                .html(`
                    Nombre: ${valor.nombre}
                    DNI: ${valor.dni}
                    Acceso: ${valor.acceso}`)
                .appendTo('#DAW'+(clave+1));
            });
        });
    }

    function error(request, errorMessage){
        alert('Error: ' + errorMessage);
    }
}
