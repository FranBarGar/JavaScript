var ar = inicializarArray();

console.log(ar);
console.log(filtradoArray());
console.log(impar());

function inicializarArray() {
    return new Array(10).fill(0).map(elem => parseInt(Math.random()*11));
}

function filtradoArray() {
    return ar.filter(function(elem){
        return elem<8;
    });
}

function impar() {
    return ar.map(function(elem) {
        if (elem%2!=0) {
            return "impar";
        }
        return elem;
    });
}
