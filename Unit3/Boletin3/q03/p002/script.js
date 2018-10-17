function calc() {
  var regExp = /^[-+]?[0-9]+$/img;
  var base = parseInt(document.forms[0].elements[0].value);
  var exp = parseInt(document.forms[0].elements[1].value);
  window.frames[0].document.forms[0].elements[1].value;
  /*if (regExp.test(base) || regExp.test(exp)) {
    document.forms[0].elements[1].value = Math.pow(base, exp);
  } else {
    alert(`Algun numero no esta bien formado.`)
  }*/
}
