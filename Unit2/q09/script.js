var input = prompt("Introduzca la palabra a traducir: ");

if (input) {
  input.toLowerCase();
}
switch (true) {
  case input == "casa":
  document.write("Palabra en español: "+input+"<br>Palabra en ingles: house");
  break;
  case input == "mesa":
  document.write("Palabra en español: "+input+"<br>Palabra en ingles: table");
  break;
  case input == "perro":
  document.write("Palabra en español: "+input+"<br>Palabra en ingles: dog");
  break;
  case input == "gato":
  document.write("Palabra en español: "+input+"<br>Palabra en ingles: cat");
  break;
  default:
  document.write("Valor introducido no valido.");
}
