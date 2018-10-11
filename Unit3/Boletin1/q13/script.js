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
do {
  var aux = longStr[0];
  var auxLength = longStr.length;
  longStr = longStr.replace(new RegExp(aux, "g"), "");
  document.write(`${aux} = ${auxLength-longStr.length}<br>`);
} while (longStr[0]);
