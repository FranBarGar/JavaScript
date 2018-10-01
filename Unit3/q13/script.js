var longStr = "";
var longStr2 = "";


for (var i = 0; i < 5; i++) {
  do {
    var str = prompt("Introduzca una frase: ");
  } while (!str);
  longStr += str;
  longStr2 += ":" + str;
}

document.write(`Palabras introducidas: "${longStr2}"<br>Estadisticas: <br>`);
for (let i = 0; i < longStr.length; i++) {
  var aux = longStr[i];
  var auxLength = longStr.length;
  for (var j = auxLength; j == longStr.length; j--) {
    longStr = longStr.replace(aux, "");
  }
  document.write(`${aux} = ${auxLength-longStr.length}<br>`);
}
