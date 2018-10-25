var clearNum = [];

function introducirNumeros() {
    list.innerHTML = "";
    var num = prompt(`Introduzca numeros separados por coma.`).split(",");
    for (var i = 0; i < num.length; i++) {
        if (num[i] && !isNaN(num[i])) {
            clearNum.push(parseInt(num[i]));
        }
    }
    crearLista(...clearNum);
}

function crearLista(...nums) {
    if (nums.length != 0) {
        for (var i = 0; i < nums.length; i++) {
            list.innerHTML += `<li>${nums[i]}</li>`;
        }
    }
}

function menor() {
    if (bool) {
        alert(`El numero menor es ${Math.min(...clearNum)}`);
    } else {
        alert(`La lista no está creada.`);
    }
}

var calcTriple = num => num * 3;

function triple() {
    var items = list.getElementsByTagName("li");
    if (items.length != 0) {
        for (var i = 0; i < items.length; i++) {
            alert(`El triple de ${items[i].innerHTML} es ${calcTriple(Number(items[i].innerHTML))}`);
        }
    } else {
        alert(`La lista no está creada.`);
    }
}
