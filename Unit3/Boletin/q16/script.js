var str = prompt("Introduzca una frase: ");
var word = prompt("Introduzca una frase a buscar: ");

if (str && word) {
  var match = str.indexOf(word);

  if (match>=0) {
    document.write(`La primera coincidencia se encuentra en la posicion ${match}.<br>`);
    document.write(`La palabra a buscar contiene ${word.length} caracteres.<br>`);
    document.write(`Frase original: ${str}<br>Frase tras el cambio: ${str.replace(word, "dwecl")}`)
  }
}
