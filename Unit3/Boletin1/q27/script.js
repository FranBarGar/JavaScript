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
  var bool = false;
  console.log(`Opciones: \n
  1. Ejercicio 24: Buscar las palabras que comiencen por el parametro introducido dentro de la cadena.\n
  2. Ejercicio 25: Buscar las palabras que terminen por el parametro introducido dentro de la cadena.\n
  3. Ejercicio 26: Mostrar el número de palabras contienen el parametro introducido dentro de la cadena.\n
  4. Salir.\n`);
  console.log(str);
  let opt = prompt(`Introduzca una opcion: `);

  switch (opt) {
    case "1":
    console.log(str.match(new RegExp(`\\b${param()}\\[A-ZÁ-ÚÑ]*`, "mg")));
    break;
    case "2":
    console.log(str.match(new RegExp(`[A-ZÁ-ÚÑ]+${param()}\\b`, `mg`)));
    break;
    case "3":
    let matches = str.match(new RegExp(`\\[A-ZÁ-ÚÑ]*${param()}\\[A-ZÁ-ÚÑ]*`, `mg`));
    console.log(matches!=null?matches.length:0);
    break;
    case "4":
    bool = confirm(`¿Desea salir del programa?`);
    break;
    default:
    console.log(`Opción incorrecta\n`);
  }
} while (!bool);

function param() {
  do {
    var param = prompt(`Introduzca los caracteres que desea buscar en la oracion: `);
  } while (!param);
  return param;
}
