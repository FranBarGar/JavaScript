x = prompt("Introduzca un numero");

if (x && x%2==0) {
  document.write("El numero "+x+" es par.");
}else if (x && (parseFloat(x)+1)%2==0){
  document.write("El numero "+x+" es impar.");
}else {
  document.write("El valor introducido no es un numero.");
}
