var clearStr = [];

function introducirPalabras() {
    var str = prompt(`Introduzca palabras separadas por coma.`).split(",");
    for (var i = 0; i < str.length; i++) {
            if (str[i]) {
                clearStr.push(str[i]);
            }
    }
    crearLista(...clearStr);
}

function crearLista() {

}
