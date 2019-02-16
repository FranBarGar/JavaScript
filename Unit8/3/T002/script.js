$(()=>{
    $(':submit').on('click', (e)=>{
        e.preventDefault();
        mostrarDatos();
    });
});

function mostrarDatos() {
    $.get("http://local.apache/Unit8/3/servidor.php")
    .done(llegadaDatos)
    .fail(error);

    function llegadaDatos(datos){
        switch ($('#curso').val()) {
            case '1DAW':
                getCurso(0);
                break;
            case '2DAW':
                getCurso(1);
                break;
            default:
                $('#info *').remove();
                $('<p>')
                .html(`No existe dicho curso.`)
                .appendTo('#info');
        }

        function getCurso(id) {
            $('#info *').remove();
            $('<p>')
            .html(`Listado de alumnos matriculados en ${id+1}DAW son:`)
            .appendTo('#info');
            var $list = $('<ul>')
            $.each(datos[id], (clave, valor)=>{
                $('<li>')
                .html(`
                    Nombre: ${valor.nombre}
                    DNI: ${valor.dni}
                    Acceso: ${valor.acceso}`)
                .appendTo($list);
            });
            $list.appendTo('#info');
        }
    }

    function error(request, errorMessage){
        alert('Error: ' + errorMessage);
    }
}
