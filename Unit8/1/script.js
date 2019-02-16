$(()=>{
    getProvincias();
    $('#provincia').on('change', ()=>{
        setMunicipios();
        ordenar();
    });

});

function getProvincias() {
    $.get("http://local.apache/Unit8/1/cargaProvinciasJSON.php")
    .done(llegadaDatos)
    .fail(error);

    function llegadaDatos(datos){
        var json = JSON.parse(datos);
        var $list = $("#provincia");

        $.each(json, (clave, valor)=>{
            $(`<option value="${clave}">${valor}</option>`)
            .appendTo($list);
        });
    }
}

function setMunicipios() {
    if ((prov = $('#provincia').val()) !='-selecciona-') {
        $.post("http://local.apache/Unit8/1/cargaMunicipiosJSON.php", {
            provincia: prov
        })
        .done(llegadaDatos)
        .fail(error);
    } else {
        var $list = $("#municipio");
        $list.children().remove();
        $('<option>-selecciona una provincia-</option>')
        .appendTo($list);
    }

    function llegadaDatos(datos){
        var json = JSON.parse(datos);
        var $list = $("#municipio");
        $list.children().remove();
        $('<option>-selecciona una provincia-</option>')
        .appendTo($list);

        $.each(json, (clave, valor)=>{
            $(`<option value="${clave}">${valor}</option>`)
            .appendTo($list);
        });
    }
}



function error(request, errorMessage){
    alert('Error: ' + errorMessage);
}

function ordenar(){
    $("select").each(function(index,elem) {
        //guardamos la opción seleccionada

        var listaActual = elem;
        var sel = listaActual.selectedIndex;

        // Aplicacion del orden alfabetico
        $(listaActual).html($("option", $(this)).sort(function(a, b) {
            //  return a.text == b.text ? 0 : a.text < b.text ? -1 : 1 //ordena por texto
            return a.value == b.value ? 0 : a.value < b.value ? -1 : 1 //ordena por atributo value
        }));

        // Reestablecemos la opción seleccionada previamente
        $(listaActual).prop('selectedIndex', sel); //listaActual.selectedIndex = sel;

    });
}
