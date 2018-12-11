window.onload = function(){
    var enlaces = document.getElementsByTagName('a');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('click', function(){
            var hijos = document.getElementsByTagName('p');
            if (hijos[this.id].style.visibility != "visible") {
                for (var i = 0; i < hijos.length; i++) {
                    hijos[i].style.visibility = "hidden";
                }
                hijos[this.id].style.visibility = "visible";
            } else {
                hijos[this.id].style.visibility = "hidden";
            }
            this.setAttribute('class', 'visitado');
        });
    }
    imprimir.addEventListener('click', function(){
        window.print();
    });
};
