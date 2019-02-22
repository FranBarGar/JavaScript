$(()=>{
    setAccesorios();
    // ej2();
    // ej3();
    ej4();
    ej5();
});

/**
 * Realiza una petición AJAX, en caso de exito, añade a la select
 * tantas opciones como articulos, en caso contrario no hace nada
 */
function setAccesorios() {
    $.get('./accesorios.php')
    .done(llegadaDatos);

    /**
     * Recibe los datos de la peticion AJAX y los inserta en la etiqueta select
     * @param  {JSON} datos Datos recibidos.
     */
    function llegadaDatos(datos) {
        $.each(datos, (i, elem)=>{
            $('#accesorios').append(
                $('<option>')
                .attr({
                    value: i,
                    precio: elem.precio,
                    stock: elem.stock,
                })
                .html(elem.etiqueta)
            )
        })
    }
}

/**
 * Ejercicio 2: Al dar click en el boton añadir se añade el elemento
 * actualmente seleccionado a la tabla justo antes de el total.
 */
function ej2() {
    $('#boton').on('click', (e)=>{
        e.preventDefault();
        añadirAccesorios();
    });

    /**
     * Añade el accesorio seleccionado a la tabla con la cantidad actual.
     */
    function añadirAccesorios() {
        var $accesorio = $('select#accesorios :selected');
        $('tr#total').before(
            $('<tr>')
            .append(
                $('<td>').html($accesorio.html())
            )
            .append(
                $('<td>').html($('#cantidad').val())
            )
            .append(
                $('<td>').html($accesorio.attr('precio'))
            )
        )
    }
}

/**
 * Ejercicio 3: Al dar click en el boton añadir se añade el elemento
 * actualmente seleccionado a la tabla con el precio correcto justo antes de el total.
 * El total tambien se modifica en relacion a los accesorios introducidos.
 */
function ej3() {
    $('#boton').on('click', (e)=>{
        e.preventDefault();
        añadirAccesorios();
    });

    /**
     * Añade el elemento actualmente seleccionado a la tabla con el precio
     * correcto justo antes de el total.
     * El total tambien se modifica en relacion a los accesorios introducidos.
     */
    function añadirAccesorios() {
        var $accesorio = $('select#accesorios :selected');
        var $cantidad = $('#cantidad');
        var unidades = $cantidad.val();
        var totalUnitario = $accesorio.attr('precio')*unidades;
        $('tr#total').before(
            $('<tr>')
            .append(
                $('<td>').html($accesorio.html())
            )
            .append(
                $('<td>').html(unidades)
            )
            .append(
                $('<td>').html(totalUnitario)
            )
        );
        var $total = $('td#totalval');
        $total.html(parseFloat($total.html())+totalUnitario);
        $cantidad.val(1);
    }
}

/**
 * Ejercicio 4: Al dar click en el boton añadir se añade el elemento
 * actualmente seleccionado a la tabla con el precio correcto justo antes de el total.
 * Si el elemento ya ha sido introducido, modifica la fila en cuestion en vez
 * de insertar otra nueva.
 * El total tambien se modifica en relacion a los accesorios introducidos.
 */
function ej4() {
    $('#boton').on('click', (e)=>{
        e.preventDefault();
        añadirAccesorios();
    });

    /**
     * Añade el elemento actualmente seleccionado a la tabla con el precio
     * correcto justo antes de el total.
     * Si el elemento ya ha sido introducido, modifica la fila en cuestion en vez
     * de insertar otra nueva.
     * El total tambien se modifica en relacion a los accesorios introducidos.
     */
    function añadirAccesorios() {
        var $accesorio = $('select#accesorios :selected');
        var $cantidad = $('#cantidad');
        var unidades = parseInt($cantidad.val());
        var totalUnitario = $accesorio.attr('precio')*unidades;
        var $item = $(`tr#${$accesorio.val()}`);
        if ($item.length != 0) {
            var pActual = parseFloat($item.children('[name=precio]').html());
            $item.children('[name=precio]').html(pActual+totalUnitario);
            var uActual = parseInt($item.children('[name=unidades]').html());
            $item.children('[name=unidades]').html(uActual+unidades);
        } else {
            $('tr#total').before(
                $('<tr>')
                .attr('id', $accesorio.val())
                .append(
                    $('<td>')
                    .html($accesorio.html())
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
        var $total = $('td#totalval');
        $total.html(parseFloat($total.html())+totalUnitario);
        $cantidad.val(1);
    }
}

/**
 * Ejercicio 5: Al dar click en Validar valida que los hay stock de los objetos de la tabla,
 * en caso de que no haya stock, pinta las celdas de rojo y muestra un texto diciendo "Sin Stock".
 */
function ej5() {
    $('input#Valida').on('click', (e)=>{
        e.preventDefault();
        validarAccesorios();
    });

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
                var stock = parseInt($elem.attr('stock'));

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
}
