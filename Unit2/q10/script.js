var sentence = prompt("Introduzca una frase: ");

if (sentence) {
var length = sentence.length;
for (var i = 0; i < length; i++) {
  if (isNaN(sentence[i])) {
    alert(sentence[i]);
  }
}
}
