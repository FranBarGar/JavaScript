var w, clearStr = [];



function introducirPalabras() {
    var str = prompt(`Introduzca palabras separadas por coma.`).split(",");
    for (var i = 0; i < str.length; i++) {
        if (/\w+/i.test(str[i])) {
            clearStr.push(str[i]);
        }
    }
    crearLista(...clearStr);
}

function crearLista(...str) {
    if (str.length != 0) {
        w = open("./q07b.html", "List", "width=500, height=300");
        setTimeout(function() {
            w.body.innerHTML += `Todas las palabras.<br>${str.join(" - ")}<br><br>`;
            w.body.innerHTML += `Todas las palabras colocadas al revés. <br>${str.reverse().join(" - ")}<br><br>`;
            w.body.innerHTML += `La primera palabra ingresada por el usuario.<br>${str[0]}<br><br>`;
            w.body.innerHTML += `La última palabra ingresada por el usuario.<br>${str[str.length-1]}<br><br>`;
            w.body.innerHTML += `El número de palabras presentes en el array.<br>${str.length}<br><br>`;
            w.body.innerHTML += `Las palabras ordenadas de la 'a' a la 'z'.<br>${str.sort().join(" - ")}<br><br>`;
            w.body.innerHTML += `Las palabras Ordenadas de la 'z' a la 'a'.<br>${str.sort().reverse().join(" - ")}<br><br>`;
        }, 500);
    }
}
