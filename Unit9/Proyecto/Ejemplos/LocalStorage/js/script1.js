$(()=>{
    setAccesorios();

    $('#boton').on('click', (e)=>{
        e.preventDefault();

        añadirAccesorios();
    });

    $('input#valida').on('click', (e)=>{
        e.preventDefault();

        validarAccesorios();
    });
});

/**
 * Realiza una petición AJAX, en caso de exito, añade a la select
 * tantas opciones como articulos.
 */
function setAccesorios() {
    $.get('./backEnd/accesorios.php')
    .done(llegadaDatos);

    /**
     * Recibe los datos de la peticion AJAX y los inserta en la etiqueta select.
     * @param  {JSON} datos Datos recibidos.
     */
    function llegadaDatos(datos) {
        $.each(datos, (i, elem)=>{
            $('#accesorios').append(
                $('<option>')
                .val(i)
                .data({
                    precio: elem.precio,
                    stock: elem.stock,
                })
                .html(elem.etiqueta)
            );
        });
    }
}

/**
 * Añade el elemento actualmente seleccionado a la tabla con el precio
 * correcto justo antes de el total.
 * Si el elemento ya ha sido introducido, modifica la fila en cuestion en vez
 * de insertar otra nueva.
 * El total tambien se modifica en relacion a los accesorios introducidos.
 */
function añadirAccesorios() {
    var $cantidad = $('#cantidad');
    var unidades = parseInt($cantidad.val());
    var $accesorio = $('select#accesorios :selected');
    var totalUnitario = $accesorio.data('precio')*unidades;
    var $item = $(`tr#${$accesorio.val()}`);
    if ($item.length >= 1) {
        modificar($item, totalUnitario, unidades);
    } else {
        añadir(
            $accesorio.val(),
            $accesorio.html(),
            totalUnitario,
            unidades,
        );
    }
    var $total = $('td#totalval');
    $total.html(parseFloat($total.html())+totalUnitario);
    $cantidad.val(1);
}

/**
 * Modifica una fila de la tabla.
 * @param  {JQuery} $item         Fila a modificar.
 * @param  {int} totalUnitario    Dinero a sumar a el precio ya establecido.
 * @param  {int} unidades         Unidades a añadir
 */
function modificar($item, totalUnitario, unidades) {
    $item
    .children('[name=precio]')
    .html(
        parseFloat($item.children('[name=precio]').html()) + totalUnitario
    );
    $item
    .children('[name=unidades]')
    .html(
        parseInt($item.children('[name=unidades]').html()) + unidades
    );
}

/**
 * Añade una fila a la tabla.
 * @param  {int}    id            Id de la fila.
 * @param  {string} texto         Texto de la etiqueta.
 * @param  {int} totalUnitario    Dinero a sumar a el precio ya establecido.
 * @param  {int} unidades         Unidades a añadir.
 */
function añadir(id, texto, totalUnitario, unidades) {
    $('tr#total').before(
        $('<tr>')
        .attr('id', id)
        .append(
            $('<td>')
            .html(texto)
        )
        .append(
            $('<td>')
            .attr('name', 'unidades')
            .html(unidades)
        )
        .append(
            $('<td>')
            .attr('name', 'precio')
            .html(totalUnitario)
        )
    );
}

/**
 * Valida que los hay stock de los objetos de la tabla,
 * en caso de que no haya stock, pinta las celdas de rojo
 * y muestra un texto diciendo "Sin Stock" aumentando a lo largo del tiempo
 * y desapareciendo luego.
 */
function validarAccesorios() {
    var $accesorios = $('select#accesorios option');

    $.each($accesorios, (i, elem) => {
        var $elem = $(elem);
        var $item = $(`tr#${$elem.val()}`);
        if ($item.length > 0) {
            var cantidad = parseInt($item.children('[name=unidades]').html());
            var stock = parseInt($elem.data('stock'));

            if (cantidad>stock) {
                $item.css('background-color', 'red');
                $('#sinStock *').remove();
                $('#sinStock').append(
                    $('<p>')
                    .html('Sin Stock')
                    .animate({
                        'font-size': '+=100'
                    }, 3000, () => {
                        $('#sinStock *').fadeOut(3000);
                    })
                );
            }
        }
    });
}
