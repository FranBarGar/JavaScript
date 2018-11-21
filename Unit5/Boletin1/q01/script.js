window.onload = function(){
    window.addEventListener('mousedown', resalta);
};

function resalta(evento) {
    var evento = evento || window.event;
    switch(evento.button) {
        case 0:
        alert('Izquierdo');
        break;
        case 1:
        alert('Central');
        break;
        case 2:
        alert('Derecho');
        break;
        case 3:
        alert('Atras');
        break;
        case 4:
        alert('Delante');
        break;
    }
}
