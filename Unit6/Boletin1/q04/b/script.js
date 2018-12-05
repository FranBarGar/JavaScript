const respuestas = [
    'Sí, ...',
    'Por supuesto, ...',
    'Claro, ...',
];

window.onload = function(){
    var enlaces = document.getElementsByTagName('a');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('click', function(){
            if (p=document.getElementsByTagName('p')[0]) {
                bloque.removeChild(p);
            }
            this.setAttribute('class', 'visitado');
            let par = document.createElement('p');
            let txt = document.createTextNode(respuestas[this.id]);
            par.appendChild(txt);
            this.parentNode.insertBefore(par, this.nextSibling);
        });
    }
    imprimir.addEventListener('click', function(){
        window.print();
    });
};
