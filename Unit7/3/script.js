$(function(){
    //a
    $("p").addClass('borde');

    //b
    $("body>ul:last li").addClass('verde');

    //c
    $("p").removeClass("borde");

    //d
    $("p").click(function(){
        $(this).hasClass('borde')?$(this).removeClass('borde'):$(this).addClass('borde');
    });

    //e
    $("p:first").text('Módulos de primero');

    //f
    $("p:last").html('<b>Módulos de segundo</b>');

    //g
    $('ul *:empty').remove();

    //h
    $('ul:first').append('<li>Formación y Orientación Laboral</li>');
    $('ul:first').prepend('<li>Formación y Orientación Laboral</li>');

    //i
    $('ul:first').prepend('<li>Programación</li>');
    $('ul:first').append('<li>Programación</li>');

    //j
    $('ul li:contains("Base de Datos")').after('<li>Sistemas Informáticos</li>');
    $('<li>Sistemas Informáticos</li>').insertAfter('ul li:contains("Base de Datos")');

    //k
    $("ul li ul").click(function(){
        $(this).append(`<li>${$(this).attr('data-hours')} horas semanales</li>`);
        $(this).off();
    });

    //l
    $("p:last+ul>").remove();

    //m
    $("p:first+ul").remove();
});
