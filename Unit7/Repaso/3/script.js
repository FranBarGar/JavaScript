const respuestas = [
    'Sí, ...',
    'Por supuesto, ...',
    'Claro, ...',
];

$(function(){
    var $enlaces = $('a');
    for (var i = 0; i < $enlaces.length; i++) {
        $($enlaces[i]).on('click', function(){
            if ($('p')) {
                $('p').remove();
            }
            $('<p></p>')
            .text(respuestas[$(this).attr('id')])
            .insertAfter(this);
            $(this).addClass('visitado');
        });
    }
    $('imprimir').on('click', function(){
        window.print();
    });
});
