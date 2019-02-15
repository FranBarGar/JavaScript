$(function(){
    // Todos estan comentados porque dan conflictos unos con otros, pero funcionan.
    //1
    // $('<div></div>').css({
    //     'height': '800px',
    //     'width': '70px'
    // })
    // .on('click',function(e){
    //     e.preventDefault();
    //     $('p').remove();
    //     $(this).css({'height': '250px', 'width': '250px'});
    //     $(this).after(`<p> left: ${$(this).position().left}, top: ${$(this).position().top} height: 250px, width: 250px</p>`);
    // })
    // .on('dblclick',function(e){
    //     e.preventDefault();
    //     $('p').remove();
    //     $(this).css({'height': '800px', 'width': '70px'});
    //     $(this).after(`<p> left: ${$(this).position().left}, top: ${$(this).position().top} height: 800px, width: 70px</p>`);
    // })
    // .appendTo($('body'));

    //2
    // $('<div></div>').css({
    //     'height': '800px',
    //     'width': '800px',
    //     'left': '100px',
    //     'position': 'relative',
    // })
    // .appendTo($('body'));
    //
    // $(`<button type="button" name="button">Translate</button>`)
    // .on('click', function(){
    //     var $div = $('div');
    //     // $div.css({
    //     //     'height': `${$div.height()-150}px`,
    //     //     'width': `${$div.width()-150}px`,
    //     //     'left': `${$div.position().left-100}px`,
    //     // });
    //     $div.animate({
    //         'height': `${$div.height()-150}px`,
    //         'width': `${$div.width()-150}px`,
    //         'left': `${$div.position().left-100}px`,
    //     });
    // })
    // .appendTo($('body'));

    //3
    //CSS
    // $('<div id="d1"></div>')
    // .css({
    //     'height': '350px',
    //     'width': '350px',
    // })
    // .appendTo('body');
    //
    // $(`<button type="button" name="button">Minimizar</button>`)
    // .on('click', function(){
    //     $('#d1').css({
    //         'height': `${$('#d1').height()-50}px`,
    //         'width': `${$('#d1').width()-50}px`
    //     });
    // })
    // .appendTo('body');
    //
    // $(`<button type="button" name="button">Aumentar</button>`)
    // .on('click', function(){
    //     $('#d1').css({
    //         'height': `${$('#d1').height()+100}px`,
    //         'width': `${$('#d1').width()+100}px`
    //     });
    // })
    // .appendTo('body');

    //CON ANIMATE
    // $('<div id="d1"></div>')
    // .css({
    //     'height': '350px',
    //     'width': '350px',
    // })
    // .appendTo('body');
    //
    // $(`<button type="button" name="button">Minimizar</button>`)
    // .on('click', function(){
    //     $('#d1').animate({
    //             height: "-=50",
    //             width: "-=50"
    //         });
    // })
    // .appendTo('body');
    //
    // $(`<button type="button" name="button">Aumentar</button>`)
    // .on('click', function(){
    //     $('#d1').animate({
    //         height: "+=100",
    //         width: "+=100"
    //     });
    // })
    // .appendTo('body');

    //4
    // $('<div id="d1"></div>')
    // .css({
    //     'height': '350px',
    //     'width': '350px',
    // })
    // .appendTo('body');
    //
    // $(`<button type="button" name="button">Minimizar</button>`)
    // .on('click', function(){
    //     var num = pedirNum();
    //     $('#d1').animate({
    //             height: "-="+num,
    //             width: "-="+num,
    //         });
    // })
    // .appendTo('body');
    //
    // $(`<button type="button" name="button">Aumentar</button>`)
    // .on('click', function(){
    //     var num = pedirNum();
    //     $('#d1').animate({
    //         height: "+="+num,
    //         width: "+="+num,
    //     });
    // })
    // .appendTo('body');
    //
    // function pedirNum(){
    //     var posicion;
    //     do {
    //         posicion=prompt('Dimensiones a modificar')
    //     } while (parseInt(posicion) && posicion<=0);
    //     return posicion;
    // }

    //5
    // $('<div id="d1"></div>')
    // .css({
    //     'height': '350px',
    //     'width': '350px',
    // })
    // .appendTo('body');
    //
    // setInterval(function() {
    //     $('#d1').fadeOut(500);
    //     $('#d1').fadeIn(500);
    // }, 1000);

    //6
    // $('<div id="d1"></div>')
    // .css({
    //     'height': '350px',
    //     'width': '350px',
    // })
    // .appendTo('body');
    //
    // setInterval(function() {
    //     $('#d1').fadeOut(2000);
    //     $('#d1').fadeIn(2000);
    // }, 4000);

    //7
    // CSS
    // $('<div id="d1">Texto de ejemplo</div>')
    // .css({
    //     'height': '350px',
    //     'width': '350px',
    //     'position': 'relative',
    // })
    // .appendTo('body');
    //
    // $(`<button type="button" name="button">Click</button>`)
    // .on('click', function(){
    //     $('#d1').css({
    //         'left': `+=100`,
    //         'font-size': `+=30`,
    //     });
    // })
    // .appendTo('body');

    // ANIMATE
    // $('<div id="d1">Texto de ejemplo</div>')
    // .css({
    //     'height': '350px',
    //     'width': '350px',
    //     'position': 'relative',
    // })
    // .appendTo('body');
    //
    // $(`<button type="button" name="button">Click</button>`)
    // .on('click', function(){
    //     $('#d1').animate({
    //         left: "+=100",
    //         'font-size': "+=30px"
    //     });
    // })
    // .appendTo('body');

    //8
    $('<div>')
    .css({
        'width': 400,
        'height': 400,
    })
    .append(
        $('<div id="small">')
        .css({
            'position': 'absolute',
            'width': 50,
            'height': 50,
        })
    )
    .appendTo('body');

    $('<button>Empezar</button>')
    .on('click', function () {
        $('#small').animate({
            left: '+=50',
            top: '+=50',
        }, 2000);
    })
    .appendTo('body');

    $('<button>Parar</button>')
    .on('click', function () {
        $('#small').stop();
    })
    .appendTo('body');

    $('<button>Parar todo</button>')
    .on('click', function () {
        $('#small').stop(true);
    })
    .appendTo('body');

    $('<button>Para y salta a la siguiente</button>')
    .on('click', function () {
        $('#small').stop();
    })
    .appendTo('body');

    $('<button>Parar todo y termina la actual</button>')
    .on('click', function () {
        $('#small').clearQueue();
    })
    .appendTo('body');
});
