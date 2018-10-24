var num, bool;
var clearNum = [];
var calcTriple = (num) => num * 3;

function introducirNumeros() {
    bool = false;
    document.getElementById("list").innerHTML = "";
    var str = prompt(`Introduzca numeros separados por coma.`);
    num = str.split(",");
    var longStr = "";
    for (var i = 0; i < num.length; i++) {
        if (!isNaN(num[i])) {
            clearNum.push(parseInt(num[i]));
            longStr += `<li>${num[i]}</li>`;
            bool = true;
        }
    }
    document.getElementById("list").innerHTML += longStr;
}

function menor() {
    if (bool) {
        var menor;
        for (var i = 0; i < clearNum.length; i++) {
            if (!menor) {
                menor = clearNum[i];
            } else if (menor > clearNum[i]) {
                menor = clearNum[i];
            }
        }
        alert(`El numero menor es ${menor}`);
    } else {
        alert(`La lista no está creada.`);
    }
}


function triple() {
    if (bool) {
        for (var i = 0; i < clearNum.length; i++) {
            alert(`El triple de ${clearNum[i]} es ${calcTriple(clearNum[i])}`);

        }
    } else {
        alert(`La lista no está creada.`);
    }
}
