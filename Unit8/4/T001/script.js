window.onload = () => {
    document.getElementById("nombre").addEventListener('keyup', valida);
}

var READY_STATE_COMPLETE=4;
var peticion_http = null;
function inicializa_xhr() {
    if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    else if(window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function crea_query_string() {
    var nombre = document.getElementById("nombre");
    return "?q=" + encodeURIComponent(nombre.value) +
    "&nocache=" + Math.random();
}

function valida() {
    peticion_http = inicializa_xhr();
    if(peticion_http) {
        peticion_http.onreadystatechange = procesaRespuesta;
        peticion_http.open("POST", "http://local.apache/Unit8/4/T001/autocompletar.php"+crea_query_string(),
        true);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send();
    }
}

function procesaRespuesta() {
    if(peticion_http.readyState == READY_STATE_COMPLETE) {
        if(peticion_http.status == 200) {
            alert(peticion_http.responseText);
        }
    }
}
