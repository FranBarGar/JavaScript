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
    w = open("./q07b.html", "List", "width=500, height=300");
    if (str.length != 0) {
        for (var i = 0; i < str.length; i++) {
            w.list.innerHTML += `<li>${str[i]}</li>`;
        }
    }
}
