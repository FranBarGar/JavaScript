$(()=>{
    $('#date').datepicker();
    $('#date').hover((e) => {
        $('<p class="selector"></p>')
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
    });
});
