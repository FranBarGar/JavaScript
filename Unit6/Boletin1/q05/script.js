var contador = 0;
const LAST = 2;

window.onload = function () {
    var imgs = document.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {
        if (contador != i) {
            imgs[i].setAttribute('height', "0");
            imgs[i].setAttribute('width', "0");
        }
    }

    var enlaces = document.getElementsByTagName('a');
    enlaces[0].addEventListener('click', function (e) {
        e.preventDefault();
        imgs[contador].setAttribute('height', "0");
        imgs[contador].setAttribute('width', "0");
        if (contador == 0) {
            contador = LAST;
        } else {
            contador--;
        }
        imgs[contador].setAttribute('height', "100");
        imgs[contador].setAttribute('width', "200");
    });
    enlaces[1].addEventListener('click', function (e) {
        e.preventDefault();
        imgs[contador].setAttribute('height', "0");
        imgs[contador].setAttribute('width', "0");
        if (contador == LAST) {
            contador = 0;
        } else {
            contador++;
        }
        imgs[contador].setAttribute('height', "100");
        imgs[contador].setAttribute('width', "200");
    });
};
