var string = prompt("Introduzca un palindromo: ");
var bool = true;

if (string) {
  var string1 = string.toLowerCase();
  var length = string.length
  for (var i = 0, j = length-1; i < length; i++, j--) {
    if (string[i]!=string[j] && !string[i] && !string[j]) {
      bool = false;
      break;
    }
  }

  if (bool) {
    document.write("\""+string + "\" si es un palíndromo.");
  } else {
    document.write("\""+string + "\" no es un palíndromo.");
  }
} else {
  document.write("No has introducido ningun parametro.");
}
