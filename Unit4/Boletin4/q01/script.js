var ar = new Array(10).fill(0);

inicializarArray();

function inicializarArray() {
    ar = ar.map(elem => parseInt(Math.random()*11));
}

console.log(ar);

function filtradoArray() {
    return ar.filter(function(elem){
        return elem<8;
    });
}

console.log(filtradoArray());

function impar() {
    return ar.map(function(elem) {
        if (elem%2!=0) {
            return "impar";
        }
        return elem;
    });
}

console.log(impar());
