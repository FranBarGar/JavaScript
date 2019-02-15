var regExp = /^([-+]?[0-9]+)$/;

function calc() {
  var base = parseInt(window.frames[0].document.forms[0].elements[0].value);
  var exp = parseInt(window.frames[0].document.forms[0].elements[1].value);
  document.forms[0].elements[1].value = Math.pow(base, exp);
  if (regExp.test(exp) && regExp.test(base)) {
    document.forms[0].elements[1].value = Math.pow(base, exp);
  } else {
    alert(`Algun numero no esta bien formado.`);
  }
}
