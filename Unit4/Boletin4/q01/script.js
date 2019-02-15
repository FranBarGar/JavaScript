var ar = inicializarArray();

console.log(ar);
console.log(ar.filter(elem=>elem<8));
console.log(ar.map(elem=>elem%2!=0?"impar":elem));

function inicializarArray() {
    return new Array(10).fill(0).map(elem => parseInt(Math.random()*11));
}
