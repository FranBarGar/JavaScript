$(()=>{
    $(':submit').on('click', (e)=>{
        e.preventDefault();
        validar();
    });
});

function validar() {
    $.post("http://local.apache/Unit8/2/T01/servidor.php", {
        fecha_nacimiento: $('#fNac').val(),
        codigo_postal: $('#cp').val(),
        telefono: $('#tel').val()
    })
    .done(llegadaDatos)
    .fail(error);

    function llegadaDatos(datos){
        $("#val").html(datos);
    }

    function error(request, errorMessage){
        alert('Error: ' + errorMessage);
    }
}
