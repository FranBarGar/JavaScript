var num1, num2;
var exit = false;
do {
  calc();
  opc = prompt("Introduzca la opcion deseada: ");
  switch (opc) {
    case "1":
    param2();
    console.log("Suma:  "+num1+"+"+num2+"="+(num1+num2)+"\n");
    break;
    case "2":
    param2();
    console.log("Resta:  "+num1+"-"+num2+"="+(num1-num2)+"\n");
    break;
    case "3":
    param2();
    console.log("Multiplicacion:  "+num1+"*"+num2+"="+(num1*num2)+"\n");
    break;
    case "4":
    param2();
    console.log("Division:  "+num1+"/"+num2+"="+(num1/num2)+"\n");
    break;
    case "5":
    param2();
    console.log("Modulo:  "+num1+"%"+num2+"="+(num1%num2)+"\n");
    break;
    case "6":
    param1();
    console.log("Raiz cuadrada:  v¬"+num1+"="+Math.sqrt(num1)+"\n");
    break;
    case "7":
    param2();
    console.log("Potencia:  "+num1+"^"+num2+"="+Math.pow(num1, num2)+"\n");
    break;
    case "8":
    param1();
    console.log("Logaritmo neperiano:  ln("+num1+")="+Math.log(num1)+"\n");
    break;
    case "9":
    paramBase();
    console.log("Cambio a base 10:  "+num1+"//"+num2+"="+ parseInt(num1, num2)+"\n");
    break;
    case "10":
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
  +"Pulse 6 para calcular la raiz cuadrada\n"
  +"Pulse 7 para calcular la potencia\n"
  +"Pulse 8 para calcular el logaritmo neperiano\n"
  +"Pulse 9 para cambiar a base 10\n"
  +"Pulse 10 para salir\n");
}

function param1() {
  do {
    num1 = prompt("Introduzca la primera variable: ");
  } while (isNaN(num1) && !num1);
  num1 = Number(num1);
  console.log("Variable 1 = "+num1+"\n");
}

function param2() {
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

function paramBase() {
  do {
    num1 = prompt("Introduzca la primera variable: ");
  } while (!num1);

  do {
    num2 = prompt("Introduzca la segunda variable: ");
  } while (isNaN(num2) && !num2);
  num2 = Number(num2);
  console.log("Variable 1 = "+num1+"\nVariable 2 = "+num2+"\n");
}
