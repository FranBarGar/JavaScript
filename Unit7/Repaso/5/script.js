var $aux = null;
$(function () {
    var img = [
        'london',
        'london',
        'newyork1',
        'newyork1',
        'paris1',
        'paris1',
    ];

    img = shuffle(img);
    for (var i = 0; i < img.length; i++) {
        $(`<div><img src="photos/${img[i]}.jpg" style="z-index:1;width: 30vw;"></img></div>`)
        .on('click', comprobar)
        .appendTo($('body'));
        $('img').hide();
    }

});

function comprobar(){
    if ($aux == null && $(this).is('div')) {
        $aux = $($(this).children()[0]);
        $aux.show();
    } else {
        var $this = $($(this).children()[0]);
        $this.show();
        alert('Acepte y espere 2 segundos.');
        setTimeout(function () {
            comparar($this);
        }, 1000);
    }
}

function comparar($this){
    if ($aux.attr('src') == $this.attr('src')) {
        $aux.parent().off();
        $this.parent().off()
        alert('Pareja!');
    } else {
        alert('Intentelo de nuevo.');
        $aux.hide();
        $this.hide();
    }
    $aux = null;
}

function shuffle(array) {
    var i = array.length, aux, random;

    while (0 !== i) {
        random = Math.floor(Math.random() * i);
        i -= 1;

        aux = array[i];
        array[i] = array[random];
        array[random] = aux;
    }

    return array;
}
