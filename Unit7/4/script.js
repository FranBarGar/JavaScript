$(function(){
    //1
    alert(`El ciclo tiene ${$("body>ul>li:not(:empty)").length} cursos`);

    //2
    $("p").hover(function(){
        $(this).next().fadeIn(2000);
    }, function () {
        $(this).next().fadeOut(2000);
    });

    //3 y 4
    $(window).on('keydown', function(event){
        switch (event.key) {
            case 'ArrowDown':
                $('p+').css('display', 'block');
                break;
            case 'ArrowUp':
                $('p+').css('display', 'none');
                break;
            case ' ':
                $('p+').css('display')=='none'?$('p+').show():$('p+').hide();
                break;
            default:
        }
    });

    //5
    $(window).off('keydown');

    //6
    $(window).on('keydown', function(event){
        if (event.key === ' ') {
            $('p+').css('display')=='none'?$('p+').show():$('p+').hide();
            $(this).off();
        }
    });

    //7 Lo comento para que no se solape con el 8 y el 9
    // $('ul[data-hours]>li').hover(function(){
    //     $('<p class="selector"></p>')
    //         .text(`${$(this).parent().attr('data-hours')} horas`)
    //         .appendTo('body')
    //         .fadeIn();
    // }, function () {
    //     $('.selector').remove();
    // }).mousemove(function (e) {
    //     $('.selector').css({
    //         'top': e.pageY,
    //         'left': e.pageX,
    //     });
    // });

    //8 y 9
    $('body>ul:last').on('click', '.azul', {modalidad: 'presencial'}, function(e){
        var $this = $(e.target);
        $('<p class="selector"></p>')
            .css({
                'top': e.pageY,
                'left': e.pageX,
            })
            .text(`Modalidad ${e.data.modalidad}: ${$this.parent().attr('data-hours')} horas`)
            .appendTo('body')
            .fadeIn()
            .fadeOut(2000, function () {
                $('.selector').remove();
            });
    });

});
