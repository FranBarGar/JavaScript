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

            var $table = $('<table>')
            .append(
                $('<thead>')
                .append($('<th>').html('NOMBRE'))
                .append($('<th>').html('DNI'))
                .append($('<th>').html('ACESSO'))
            );

            var $tbody = $('<tbody>');
            $.each(datos[id], (clave, valor)=>{
                $tbody
                .append(
                    $('<tr>')
                    .append(
                        $('<td>')
                        .html(valor.nombre)
                    )
                    .append(
                        $('<td>')
                        .html(valor.dni)
                    )
                    .append(
                        $('<td>')
                        .html(valor.acceso)
                    )
                )
            });

            $table
            .append($tbody)
            .appendTo('#info');
        }
    }

    function error(request, errorMessage){
        alert('Error: ' + errorMessage);
    }
}
