function calc() {
  var regExp = /^[-+]?[1-9][0-9]*$/img;
  var base = window.frames[0].document.forms[0].elements[0].value;
  var exp = window.frames[0].document.forms[0].elements[1].value
  if (regExp.test(base) && regExp.test(exp)) {
    document.forms[0].elements[1].value = Math.pow(base, exp);
  } else {
    alert(`Algun numero no esta bien formado.`)
  }
}
