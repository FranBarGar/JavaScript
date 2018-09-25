var num = prompt("Introduzca un numero menor a 1000.");

if (num && !isNaN(num) && num>0 && num<1000) {
  var numLength = num.length;
  for (var i = 0; i < numLength; i++) {
    alert(num[i]);
  }
} else {
  document.write("Valor introducido incorrecto.")
}
