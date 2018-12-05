window.onload = function(){
    var enlaces = document.getElementsByTagName('a');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('click', function(){
            var hijos = document.getElementsByTagName('p');
            for (var i = 0; i < hijos.length; i++) {
                hijos[i].style.visibility = "hidden";
            }
            hijos[this.id].style.visibility = "";
            this.setAttribute('class', 'visitado');
        });
    }
    imprimir.addEventListener('click', function(){
        window.print();
    });
};
