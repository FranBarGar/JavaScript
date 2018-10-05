var str = `hola que tal,
soy colosal,
lo soy
por que no hay
quien me pare (y a esta frase, tampoco)`;

do {
  var param = prompt(`Introduzca el numero de caracteres que desea que contenga la palabra buscar en la oracion: `);
} while (!param && isNaN(param));

console.log(str+"\n");
console.log(str.match(new RegExp(`( |^)\\S{${param}}( |$)`, `img`)));
