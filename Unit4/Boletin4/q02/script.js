var ar = Array.of(1, 4, 7, 11, 10);

console.log(ar);

console.log(ar.every(elem=>elem > 0 && Number.isInteger(elem)));

var arMul = ar.map(elem => elem*3);
console.log(arMul);

console.log(arMul.reduce((total, elem) => total * elem, 1));
