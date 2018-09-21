a = prompt("Introduzca el numero del que desee saber su tabla de multiplicar");

if (a && !isNaN(a)) {
  for (var i = 0; i <= 10; i++) {
    document.write(a+" x "+i+" = "+(a*i)+"<br/>");
  }
}else {
  document.write("El valor introducido no es un numero.")
}
