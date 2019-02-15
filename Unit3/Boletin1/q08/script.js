var num1, num2;
var exit = false;
do {
  calc();
  opc = prompt("Introduzca la opcion deseada: ");
  switch (opc) {
    case "1":
    do {
      num1 = prompt("Introduzca el radio del circulo: ");
    } while (isNaN(num1) && !num1);
    num1 = Number(num1);
    console.log("El área de un circulo es "+ (Math.PI*Math.pow(num1, 2)) +" cm2");
    break;
    case "2":
    param();
    console.log("El área de un triangulo es "+ (num1*num2)/2 +" cm2");
    break;
    case "3":
    exit = confirm("¿Desea salir de la calculadora?");
    break;
    default:
    console.log("Opcion no valida.\n")
  }
} while (!exit);

function calc() {
  console.log("Calculadora\n"
  +"Pulse 1 para calcular el area del circulo\n"
  +"Pulse 2 para calcular el area del triangulo\n"
  +"Pulse 3 para salir\n");
}

function param() {
  do {
    num1 = prompt("Introduzca la longitud de la base: ");
  } while (isNaN(num1) && !num1);
  num1 = Number(num1);

  do {
    num2 = prompt("Introduzca la altura del triangulo: ");
  } while (isNaN(num2) && !num2);
  num2 = Number(num2);
  console.log("Variable 1 = "+num1+"\nVariable 2 = "+num2+"\n");
}
