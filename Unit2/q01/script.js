nota = prompt("Introduzca su nota");

/*if (nota && nota>=0 && nota<=10) {
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
  document.write("El valor introducido no es una nota valida.");
}*/

if (nota && !isNaN(nota)) {
  switch (nota>=0 && nota<=10) {
    case (nota<5): {
      document.write("Suspenso");
      break;
    }
    case (nota<7): {
      document.write("Aprobado");
      break;
    }
    case (nota<9): {
      document.write("Notable");
      break;
    }
    case (nota<=10): {
      document.write("Sobresaliente");
      break;
    }
    default:
    document.write("El valor introducido no es una nota valida.");
  }
}else {
  document.write("El valor introducido no es una nota valida.");
}

/*((nota<0 || nota>10) && !nota && isNaN(nota))?document.write("El valor introducido no es una nota valida.")
  :(nota<5)?document.write("Suspenso")
    :(nota<7)?document.write("Aprobado")
      :(nota<9)?document.write("Notable")
        :document.write("Sobresaliente");*/
