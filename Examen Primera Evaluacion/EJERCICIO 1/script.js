var count = 0;
var selected = "";
window.onload = function(){
    crearTabla(3);
    buscar();
    if (getCookie('partida')) {
        count = parseInt(getCookie('partida'))+1;
    }
    alert(`Partida nº: ${count}`);
    setCookie('partida', count, new Date(2020, 10, 10))

    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', function(){
            if (this.value!='?') {
                selected=this.value;
            }
        });
    }

    var botones = document.getElementsByTagName('button');
    botones[0].addEventListener('click', function(){
        generarValores(3);
    });
    botones[1].addEventListener('click', function() {
        window.location.reload();
    });
    botones[1].addEventListener('keyDown', function(e) {
        alert(e.keyCode);
    });
    botones[2].addEventListener('click', sumar);
}

function crearTabla(num){
    var tabla = document.createElement('table');
    for (var i = 0; i < num; i++) {
        var row = tabla.insertRow(-1);
        for (var j = 0; j < num; j++) {
            var cell = row.insertCell(-1);
            cell.addEventListener('mouseover', function() {
                if (selected!="" && this.innerHTML=="") {
                    var text = document.createTextNode(selected);
                    this.appendChild(text);
                }
            });
        }
    }
    var inputs = document.getElementsByTagName('input');
    document.body.insertBefore(tabla, inputs[inputs.length-1].nextSibling)
}

function generarValores(num){
    var ventana = window.open('', 'GenerarValores', 'width=400, height=200');
    ventana.onload = function(){
        buscar();
    }

    for (var i = 0; i < num; i++) {
        var br = document.createElement('p');
        var input = document.createElement('input');
        input.addEventListener('change', function(){
            if (!/^\d{2}$/.test(this.value)) {
                if (this.parentNode.children.length==1) {
                    var p = document.createElement('span');
                    var text = document.createTextNode('Introduzca una cifra de dos digitos');
                    p.appendChild(text);
                    this.parentNode.appendChild(p);
                }
            } else {
                this.setAttribute('readonly', 'readonly');
            }
        });
        br.appendChild(input);
        ventana.document.body.appendChild(br);
    }
    var boton = document.createElement('button');
    var text = document.createTextNode('Cerrar');
    boton.appendChild(text);
    boton.addEventListener('click', function(){
        var inputs = ventana.document.getElementsByTagName('input');
        bool = true;
        for (var i = 0; i < inputs.length; i++) {
            if (!/^\d{2}$/.test(inputs[i].value)) {
                bool = false;
            }
        }
        if (bool) {
            var principal = document.getElementsByTagName('input');
            for (var j = 0; j < inputs.length; j++) {
                principal[j].value = inputs[j].value;
            }
            this.close;
        }
    });
    ventana.document.body.appendChild(boton);
}

function sumar(){
    var sum=0;
    var tabla = document.getElementsByTagName('td');
    for (var i = 0; i < tabla.length; i++) {
        if (/^\d{2}$/.test(tabla[i].innerHTML)) {
            sum += parseInt(tabla[i].innerHTML);
        }
    }
    var res = document.getElementsByTagName('p');
    if (res.length==0) {
        var p = document.createElement('p');
        var text = document.createTextNode(`El resultado de la suma es: ${sum}`);
        p.appendChild(text);
        this.parentNode.appendChild(p);
        document.body.appendChild(p);
    } else {
        res[0].innerHTML = `El resultado de la suma es: ${sum}`;
    }

}
