$(()=>{
    setRadio();
});

function setRadio() {
    $.get("http://local.apache/Unit8/4/T002/personas.php")
    .done(llegadaDatos)
    .fail(error);

    function llegadaDatos(datos){
        var radio = JSON.parse(datos);
        var $form = $('<form>').attr({
            action: '#',
            method: 'POST',
        })
        .append('Grupo de clientes: <br>');
        for (var i = 0; i < radio.length; i++) {
            $('<span>')
            .append(
                $('<input>')
                .attr({
                    type: 'radio',
                    value: i,
                    name: 'persona'
                })
            )
            .append((i+1)+'<br>')
            .appendTo($form);
        }
        $form.appendTo('body');
        $('input').on('click', mostrarDatos);
    }

    function error(request, errorMessage){
        alert('Error: ' + errorMessage);
    }
}

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
