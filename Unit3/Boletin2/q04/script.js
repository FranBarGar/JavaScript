var interval;

init();

function init() {
    window.setInterval(function() {
      var date = new Date();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      if (h < 10) {h = `0${h}`}
      if (m < 10) {m = `0${m}`}
      if (s < 10) {s = `0${s}`}
      document.forms[0].elements[0].value = h;
      document.forms[0].elements[1].value = m;
      document.forms[0].elements[2].value = s;
    }, 1000);
}

function activar() {
  interval = window.setInterval(function() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if (h < 10) {h = `0${h}`}
    if (m < 10) {m = `0${m}`}
    if (s < 10) {s = `0${s}`}
    document.forms[0].elements[0].value = h;
    document.forms[0].elements[1].value = m;
    document.forms[0].elements[2].value = s;
  }, 1000);
}

function desactivar() {
  window.clearInterval(interval);
}
