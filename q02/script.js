x = prompt("Introduzca el numero del que calcular el factorial");

function factorial(x){
  if (x==0) {
    return 1;
  }else {
    return x*factorial(x-1);
  }
}

if (x && x>=0) {
    document.write(factorial(x));
}else {
  document.write("El valor introduzido no es valido");
}
