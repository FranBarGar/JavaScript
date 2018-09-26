var num1, num2;
var exit = false;
do {
  calc();
  opc = prompt("Introduzca la opcion deseada: ");
  switch (opc) {
    case "1":
    param();
    console.log("Suma:  "+num1+"+"+num2+"="+(num1+num2)+"\n");
    break;
    case "2":
    param();
    console.log("Resta:  "+num1+"-"+num2+"="+(num1-num2)+"\n");
    break;
    case "3":
    param();
    console.log("Multiplicacion:  "+num1+"*"+num2+"="+(num1*num2)+"\n");
    break;
    case "4":
    param();
    console.log("Division:  "+num1+"/"+num2+"="+(num1/num2)+"\n");
    break;
    case "5":
    param();
    console.log("Modulo:  "+num1+"%"+num2+"="+(num1%num2)+"\n");
    break;
    case "6":
    exit = confirm("¿Desea salir de la calculadora?");
    break;
    default:
    console.log("Opcion no valida.\n")
  }
} while (!exit);

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
  } while (isNaN(num1) && !num1);
  num1 = Number(num1);

  do {
    num2 = prompt("Introduzca la segunda variable: ");
  } while (isNaN(num2) && !num2);
  num2 = Number(num2);
  console.log("Variable 1 = "+num1+"\nVariable 2 = "+num2+"\n");
}
