var interval;

init();

function init() {
  setInterval(function() {
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

/**
* Valida la alarma, en caso de introducir una hora erronea muestra una alerta,
* en caso contrario activa la alarma.
*/
function validate() {
  var regExpH = /^([0-1][0-9])|([2][0-3])$/img;
  var regExpM = /^[0-5][0-9]$/img;
  var hours = document.forms[1].elements[0].value;
  var minutes = document.forms[1].elements[1].value;
  if (regExpH.test(hours) && regExpM.test(minutes)) {
    document.forms[1].elements[2].disabled = true;
    document.forms[1].elements[1].disabled = true;
    document.forms[1].elements[0].disabled = true;
    activate(hours, minutes);
  } else {
    alert(`Hora no valida. El formato correcto es hh:mm`);
  }
}


function activate(alarmH, alarmM) {
  interval = setInterval(function() {
    var ext = 60;  // Maximo de extension de alarma: 60 -- Se podria pedir el tiempo que se quiera ampliar
    if (alarmH == document.forms[0].elements[0].value && alarmM == document.forms[0].elements[1].value) {
      if (confirm(`Alarma activada, ¿desea descansar ${ext} minutos mas?`)) {
        alarmM = parseInt(alarmM) + ext;
        if (alarmM >= 60) {
          alarmH = parseInt(alarmH) + 1;
          alarmM -= 60;
          if (alarmH < 10) {alarmH = `0${alarmH}`}
          document.forms[1].elements[0].value = alarmH;
        }
        if (alarmM < 10) {alarmM = `0${alarmM}`}
        document.forms[1].elements[1].value = alarmM;
      } else {
        deactivate();
      }
    }
  }, 1000);
}

function deactivate() {
  window.clearInterval(interval);
  document.forms[1].elements[2].disabled = false;
  document.forms[1].elements[1].disabled = false;
  document.forms[1].elements[0].disabled = false;
}
