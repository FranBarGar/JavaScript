var valores = [true, 5, false, "hola", "adios", 2];

var length = valores.length;
var str, bool, num;
for (var i = 0; i < length; i++) {
  // String
  if (typeof(valores[i])=="string") {
    if (str) {
      if (str == valores[i]) {
        document.write("String:<br>"+str + " y " + valores[i] + " son iguales en valor.<br><br>")
      } else {
        document.write("String:<br>"+(str>valores[i] ? str : valores[i])+" es mayor que "+(str<valores[i] ? str : valores[i])+"<br><br>");
      }
    } else {
      str = valores[i];
    }
  }

  // Boolean
  if (typeof(valores[i])=="boolean") {
    if (bool) {
      document.write("Boolean:<br>& logico: "+bool+" && "+valores[i]+" = "+(bool&&valores[i])+"<br>");
      document.write("O logico: "+bool+" || "+valores[i]+" = "+(bool||valores[i])+"<br><br>");
    } else {
      bool = valores[i];
    }
  }

  // Number
  if (typeof(valores[i])=="number") {
    if (num) {
      document.write("Number:<br>Division: "+num+" / "+valores[i]+" = "+(num/valores[i])+"<br>");
      document.write("Modulo: "+num+" % "+valores[i]+" = "+(num%valores[i])+"<br><br>");
    } else {
      num = valores[i];
    }
  }
}
