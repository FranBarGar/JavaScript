var string = prompt("Introduzca un palindromo: ");
var bool = true;

if (string) {
  var string1 = string.toLowerCase();

  var string2 = "";
  var length = string1.length;
  for (var i = 0; i < length; i++) {
    if (string[i]!=" ") {
      string2 += string1[i];
    }
  }

  var length1 = string2.length;
  for (var i = 0, j = length1-1; i < length1; i++, j--) {
    if (string2[i]!=string2[j]) {
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
