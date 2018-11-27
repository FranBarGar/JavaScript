var orden = [];

window.onload = function(){
    var color = document.getElementsByName('color');
    for (var i = 0; i < color.length; i++) {
        color[i].addEventListener('click', cambiarColor);
    }
    var days = document.getElementsByName('dias');
    for (var i = 0; i < days.length; i++) {
        days[i].addEventListener('change', cambiarDia);
    }
    limpiar.addEventListener('click', function() {
        location.reload();
    });
    enlace.addEventListener('click', function() {
        location.replace('https://www.google.es/');
    });
};

function cambiarColor(){
    body.style.background = this.value;
}

function cambiarDia(){
    if (this.checked) {
        orden.push(this.value);
        dia.value = this.value;
    } else {
        orden = orden.filter(elem => elem != this.value);
        dia.value = orden[orden.length-1]===undefined?"":orden[orden.length-1];
    }
}
// selectedIndex para el select
