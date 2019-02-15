$(function(){
    //a
    var $ul = $('ul').detach();

    //b
    $('body').append($ul);

    //c
    $('ul').append('<li>C</li>');

    //d
    $('ul').prepend('<li>D</li>');

    //e
    $('li:last').remove();

    //f
    $('li:first').remove();

    //g
    $('li:lt(2)').remove();

    //h
    $('li:gt(1)').remove();
})
