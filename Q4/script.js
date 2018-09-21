x = prompt("Introduzca un numero");
y = prompt("Introduzca otro numero");

if (x && y && !isNaN(x) && !isNaN(y)) {
  for (var i = Math.min(x, y); i <= Math.max(x, y); i++) {
    if (i%8==0) {
      document.write(i + "<br/>");
    }
  }
}else {
  document.write("Alguno de los valores introducidos no es valido, solo se aceptan numeros.");
}
