var num = prompt("Introduzca los numeros a sumar: ");

if (num && !isNaN(parseFloat(num))) {
  var length = num.length;
  var sum = 0;
  for (var i = 0; i < length; i++) {
    if (isNaN(num[i])) {
      break;
    }
    sum += parseInt(num[i]);
  }
  document.write("Modificacion 1: " + num + " = " + sum + "<br>");

  sum = 0;
  for (var i = 0; i < length; i++) {
    if (!isNaN(num[i])) {
      sum += parseInt(num[i]);
    }
  }
  document.write("Modificacion 2: " + num + " = " + sum + "<br>");

  sum = 0;
  var sumDec = 0;
  for (var i = 0; i < length; i++) {
    if (!isNaN(num[i])) {
      sum += parseInt(num[i]);
    } else {
      for (var j = i+1; j < length; j++) {
        sumDec += parseInt(num[j])*0.1;
      }
      sum += sumDec;
      break;
    }
  }
  document.write("Modificacion 2(alt): " + num + " = " + sum + "<br>");

} else {
  document.write("El valor introducido no es un numero.")
}