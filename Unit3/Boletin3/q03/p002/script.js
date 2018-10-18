function calc() {
  var regExp = /^[-+]?[0-9]+$/;
  var base = parseInt(parent.document.forms[0].elements[0].value);
  var exp = parseInt(parent.document.forms[0].elements[1].value);
  if (regExp.test(base) && regExp.test(exp)) {
    document.forms[0].elements[1].value = Math.pow(base, exp);
  } else {
    alert(`Error: Algun numero no esta bien formado.`)
  }
}
