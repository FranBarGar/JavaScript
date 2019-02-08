$(function(){
    //a
    console.log($('p:contains("Primero") + ul li:not(:empty)'));
    console.log($('ul:first li:not(:empty)'));

    //b
    console.log($('ul:first li:contains("Sistemas Informáticos")'));
    console.log($('ul:first li:eq(2)'));

    //c
    console.log($('li:contains("Sistemas Informáticos")').next());
    console.log($('ul:first li:eq(2)+'));

    //d
    console.log($('ul:first li:eq(2) ~ li:not(:empty)'));


    //e
    console.log($('[href]'));


    //f
    console.log($('ul li *:not([href])'));


    //g
    console.log($("[href*='mod']"));


    //h


    //i


});
