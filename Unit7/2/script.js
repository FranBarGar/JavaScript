$(function(){
    //a
    console.log($('p:contains("Primero") + ul li:not(:empty)'));
    console.log($('ul:first li:not(:empty)'));

    //b
    console.log($('ul:first li:contains("Sistemas Informáticos")'));
    console.log($('ul:first li:eq(2)'));

    //c
    console.log($('li:contains("Sistemas Informáticos")+'));
    console.log($('ul:first li:eq(2)+'));

    //d
    console.log($('ul:first li:eq(2) ~ li:not(:empty)'));

    //e
    console.log($('[href]'));

    //f
    console.log($('ul li *:not([href])'));
    console.log($('ul>li :not("[href]")'));

    //g
    console.log($("[href*='mod']"));

    //h
    console.log($('[href^="mod"]'));

    //i
    console.log('[href$=".html"]');

    //j
    console.log($('ul li ul li:last-child'));
    console.log($('ul li ul li:odd'));

    //k
    var vacio = $(':empty')
    vacio.append('Nodo vacío.');
    vacio.html('Nodo vacío.');

    //l
    console.log($('li:contains("DWESE"), li:contains("DAW"), li:contains("EIE")'));

    //m
    console.log($('a:last').attr('href','FOL'));
    console.log($('a:contains("Formación y Orientación Laboral")').attr('href','FOL'));

});
