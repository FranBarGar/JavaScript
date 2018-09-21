var num = prompt("Introduzca un numero menor a 1000.");
var numLength = num.length;

if (num && !isNaN(parseInt(num)) && num>-1000 && num<1000) {
  for (var i = 0; i < numLength; i++) {
    alert(num[i]);
  }
} else {
  document.write("Valor introducido incorrecto.")
}
