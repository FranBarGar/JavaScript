var str = `Érase un hombre a una nariz pegado,
érase una nariz superlativa,
érase una nariz sayón y escriba,
érase un peje espada muy barbado.

Era un reloj de sol mal encarado,
érase una alquitara pensativa,
érase un elefante boca arriba,
era Ovidio Nasón más narizado.

Érase un espolón de una galera,
érase una pirámide de Egipto,
las doce Tribus de narices era.

Érase un naricísimo infinito,
muchísimo nariz, nariz tan fiera
que en la cara de Anás fuera delito.`;

do {
  var param = prompt(`Introduzca el numero de caracteres que desea que contenga la palabra buscar en la oracion: `);
} while (!param && isNaN(param));

console.log(str+"\n");
console.log(str.match(new RegExp(`( |^)[A-ZÁ-ÚÑ]{${param}}(?=[ \\.,;]|$)`, `img`)));
