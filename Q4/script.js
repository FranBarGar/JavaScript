x = prompt("Introduzca un numero");
y = prompt("Introduzca otro numero");

if (x && y && !isNaN(x) && !isNaN(y)) {
  if (x>=y) {
    big = x;
    small = y;
  }else {
    big = y;
    small = x;
  }
  for (var i = small; i <= big; i++) {
    if (i%8==0) {
      document.write(i + "<br/>");
    }
  }
}else {
  document.write("Alguno de los valores introducidos no es valido, solo se aceptan numeros.");
}
