var str, del1, del2, pos1;

do {
  console.log("Opciones:\n1: Modificación 0\n2: Modificación 1\n3: Modificación 2\n4: Salir\n");
  var opc = prompt("Introduzca la opcion deseada: ");
  console.log(`Opcion introducida: ${opc}\n`);
  var bool = false;
  switch (opc) {
    case "1":
    param1();
    mod0(param2());
    break;
    case "2":
    param1();
    mod1(str.indexOf(del1, pos1));
    break;
    case "3":
    param1();
    mod0(param2());
    break;
    case "4":
    bool = confirm("¿Desea salir?");
    break;
    default:
    console.log("Opcion incorrecta.");
  }
} while (!bool);
console.log("Hasta luego!");

/*
Recolecta los parametros base para cualquiera de las opciones:
str: frase introducida
del1: un delimitador
pos1: posicion del delimitador en la frase
*/
function param1() {
  do {
    str = prompt("Introduzca una frase con 2 delimitadores: ");
  } while (!str);
  do {
    del1 = prompt("Introduzca un delimitador: ");
  } while (!del1);
  pos1 = str.indexOf(del1)!=-1?str.indexOf(del1)+del1.length+1:-1;
}

/*
Recolecta el segundo delimitador y
devuelve la posicion de dicho delimitador en la cadena.
*/
function param2() {
  do {
    del2 = prompt("Introduzca el delimitador final: ");
  } while (!del2);
  return str.indexOf(del2, pos1);
}

/*
Usa solo un delimitador
Recibe la posicion del ultimo caracter a mostrar.
*/
function mod1(pos2) {
  if (pos1!=-1 && pos2!=-1) {
    console.log(`Frase introducida: "${str}"\nDelimitador: "${del1}"\nResultado: "${str.slice(pos1, pos2).trim()}"`);
  } else {
    console.log("El delimitador no está en la frase o solo está una vez.");
  }
}

/*
Usa dos delimitadores pero no se especifica si deben ser iguales o diferentes.
Recibe la posicion del ultimo caracter a mostrar.
*/
function mod0(pos2) {
  if (pos1!=-1 && pos2!=-1 && del1!=del2) {
    console.log(`Frase introducida: "${str}"\nDelimitador inicial: "${del1}"\nDelimitador final: "${del2}"\nResultado: "${str.slice(pos1, pos2).trim()}"`);
  } else {
    console.log("Alguno de los delimitadores no está en la frase.");
  }
}
