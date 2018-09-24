var dniNum = parseInt(prompt("Introduzca su numero de DNI."));
var dniLetter = prompt("Introduzca la letra de si DNI");
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
'C', 'K', 'E', 'T'];
var letter = letras[dniNum%23];

if (dniNum && !isNaN(dniNum) && dniNum>=0 && dniNum<=99999999) {
  if (dniLetter.toUpperCase()==letter) {
    document.write("El DNI introducido es correcto ("+dniNum+letter+")");
  } else {
    document.write("La letra del DNI introducido es incorrecta: <br> Correcta: "+dniNum+letter+"<br> Introducida: "+dniNum+dniLetter);
  }
} else {
  document.write("El dni introducido no es correcto.")
}
