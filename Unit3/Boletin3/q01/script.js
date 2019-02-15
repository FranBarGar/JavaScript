function mover(a) {
  var regExp = /^[-+]?[1-9][0-9]*$/img;
  if (regExp.test(a)) {
    window.moveBy(a, 0);
  } else {
    alert(`Numero malformado.`);
  }
}
