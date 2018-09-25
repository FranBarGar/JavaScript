function calc() {
console.log("Calculadora\n"
+"Pulse 1 para sumar\n"
+"Pulse 2 para restar\n"
+"Pulse 3 para multiplicar\n"
+"Pulse 4 para dividir\n"
+"Pulse 5 para obtener el módulo\n"
+"Pulse 6 para salir\n");
}

function param() {
  do {
    num1 = prompt("Introduzca la primera variable: ");
  } while (isNaN(num1));
  num1 = Number(num1);
<<<<<<< HEAD
  console.log();
=======
>>>>>>> 9a5cd73e548da564b6d4342069a686dbe221243b

  do {
    num2 = prompt("Introduzca la segunda variable: ");
  } while (isNaN(num2));
  num2 = Number(num2);
<<<<<<< HEAD
  console.log("Variable 1 = "+num1+"\nVariable 2 = "+num2+"\n");
=======
>>>>>>> 9a5cd73e548da564b6d4342069a686dbe221243b

}

function sumar() {
<<<<<<< HEAD
  console.log("Suma:  "+num1+"+"+num2+"="+(num1+num2)+"\n");
=======
  console.log("Suma:  "+num1+"+"+num2+"="+(num1+num2));
>>>>>>> 9a5cd73e548da564b6d4342069a686dbe221243b
}


var num1, num2;
do {
  calc();
  opc = prompt("Introduzca la opcion deseada: ");
  switch (opc) {
    case "1":
      param();
      sumar();
    break;
    case "2":
      param();

    break;
    case "3":
      param();

    break;
    case "4":
      param();

    break;
    case "5":
      param();

    break;
    case "6":
<<<<<<< HEAD
      confirm("¿Desea salir de la calculadora?");
=======

>>>>>>> 9a5cd73e548da564b6d4342069a686dbe221243b
    break;
    default:
      console.log()
  }
<<<<<<< HEAD
} while (opc!="6");
=======
} while (true);
>>>>>>> 9a5cd73e548da564b6d4342069a686dbe221243b
