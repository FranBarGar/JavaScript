var str = prompt("Introduzca una frase: ");

if (str) {
  str.trim(" ");
  var words = str.split(" ");
  document.write(`Primera palabra: ${words[0]}<br>`);
  document.write(`Ultima palabra: ${words[words.length-1]}<br>`);
  document.write(`Numero de palabras: ${words.length}<br>`);

} else {
  document.write(`Debe introducir una frase.`)
}
