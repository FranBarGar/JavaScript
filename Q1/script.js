nota = prompt("Introduzca su nota");
if (nota && nota>=0 && nota<=10) {
  if (nota<5) {
    document.write("Suspenso");
  }else if (nota<7) {
    document.write("Aprobado");
  }else if (nota<9) {
    document.write("Notable");
  }else if (nota<=10) {
    document.write("Sobresaliente");
  }
}else {
  document.write("El valor introducido no es una nota valida.")
}
