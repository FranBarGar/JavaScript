$(()=>{
    fecha();
    sexo();
});

function fecha() {
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);

    $('#date').datepicker({
        showAnim: "slideDown",
        minDate: '-12y',
        maxDate: new Date(),
    });

    $('<img>')
    .attr('src', 'images/calendar.png')
    .hover((e) => {
        $('<p>')
        .addClass('selector')
        .text(`Seleccione una fecha.`)
        .appendTo('body')
        .fadeIn();
    }, () => {
        $('.selector').remove();
    }).mousemove((e) => {
        $('.selector').css({
            'background-color': 'green',
            position: 'absolute',
            top: e.pageY,
            left: e.pageX,
        });
    })
    .insertAfter('#date');
}

function sexo() {
    $('#gender').selectmenu({
        classes: {
            "ui-selectmenu-menu": "highlight",
            "ui-selectmenu-button-closed": "ui-corner-all",
            "ui-selectmenu-button-open": "ui-corner-top",
        }
    });
}
