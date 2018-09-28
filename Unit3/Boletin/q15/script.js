var str = prompt("Introduzca una frase: ");

if (str && isNaN(str)) {
  if (str==str.toLowerCase()) {
    document.write(`La frase "${str}" solo contiene letras minusculas.`);
  } else if (str==str.toUpperCase()) {
    document.write(`La frase "${str}" solo contiene letras mayusculas.`);
  } else {
    document.write(`La frase "${str}" contiene tanto letras minusculas como mayusculas.`);
  }
} else {
  document.write(`Debe introducir una frase.`);
}
