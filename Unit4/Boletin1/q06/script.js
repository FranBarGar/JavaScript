var ar = [];
imp(21);
console.log(`a) \n${sum()}`);
console.log(`b) \n${ar.reverse()}`);
search();
console.log(`e) \n${ar.sort(function(a, b){return a-b})}\n${ar.sort(function(a, b){return b-a})}`);

function imp(a) {
    for (var i = 0; i <= a; i++) {
        if (i%2!=0) {
            ar.push(i);
        }
    }
    console.log(ar);
}

function sum() {
    var res = 0;
    for (var i = 0; i < ar.length; i++) {
        res += ar[i];
    }
    return res;
}

function search() {
    var del = ar.indexOf(Number(prompt(`Introduzca el valor a buscar: `)));
    if (del >= 0) {
        console.log(`c) \nLa busqueda a tenido exito. Se ha encontrado ${ar[del]} en la posicion ${del}.`);
        ar.splice(del, 1);
        console.log(`d) \nSe ha eliminado la coincidencia encontrada.\n${ar}`);
    } else {
        console.log(`c) \nNo se han encontrado coincidencias`);
        console.log(`c) \nNo se han encontrado coincidencias en el ejercicio anterior`);
    }
}
