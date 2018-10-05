var str;

do {
  str = prompt(`Introduzca una oracion: `);
} while (!str);

console.log(str+"\n");
console.log(str.replace(/<script>/mg, ""));
