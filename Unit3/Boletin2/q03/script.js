var interval;

reanudar();

function reanudar() {
  if (!interval) {
    interval = window.setInterval(function() {
      var date = new Date();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      if (h < 10) {h = `0${h}`}
      if (m < 10) {m = `0${m}`}
      if (s < 10) {s = `0${s}`}
      document.title = `${h}:${m}:${s}`
    }, 1000);
  } else {
    alert(`El contador ya está activo.`)
  }
}

function parar() {
  window.clearInterval(interval);
  interval = null;
}
