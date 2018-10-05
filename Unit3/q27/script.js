var str = `hola que tal,
soy colosal,
lo soy
por que no hay
quien me pare (y a esta frase, tampoco)`;

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
    console.log(str.match(new RegExp(`\\b${param()}\\S*`, "mg")));
    break;
    case "2":
    console.log(str.match(new RegExp(`\\S+${param()}\\b`, `mg`)));
    break;
    case "3":
    let matches = str.match(new RegExp(`\\S*${param()}\\S*`, `mg`));
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
