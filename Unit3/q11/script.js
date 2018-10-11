var num1, num2, num3;
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
    let aux = parseInt(num2, num1);
    console.log(`Cambio de base ${num1} a base ${num3}: \n${num2} de base ${num1} a base ${num3} = ${aux.toString(num3)}\n`);
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
  +"Pulse 9 para calcular de una base dada a otra base deseada\n"
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
  var regExp1 = /^([2-9]|([1-2][0-9])|(3[0-6]))$/mg;
  do {
    num1 = prompt("Introduzca la base del numero que va a introducir: ");
  } while (isNaN(num1) || !num1 || !regExp1.test(num1));

  var regExp2;
  var aux = parseInt(num1)-1;
  var alph = "0123456789abcdefghijklmnopqrstuvwxyz";
  if (aux>=10) {
    regExp2 = new RegExp(`^([+-]?([0-9]+[a-${alph[aux]}]*)|([0-9]*[a-${alph[aux]}]+))$`, 'img');
  } else {
    regExp2 = new RegExp(`^([+-]?[0-${aux}]+)$`, 'mg');
  }
  num1 = Number(num1);

  do {
    num2 = prompt("Introduzca el numero: ");
  } while (!num2 || !regExp2.test(num2));

  do {
    num3 = prompt("Introduzca la base deseada: ");
  } while (isNaN(num3) || !num3 || regExp1.test(num3));
  num3 = Number(num3);
  console.log("Numero = "+num2+"\nBase del numero = "+num1+"\nBase deseada = "+num3+"\n");
}
