comprobar.addEventListener('click', function(e) {
    e.preventDefault();
    valida();
});

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
    var login = document.getElementById("login");
    return JSON.stringify({login: login.value});
}

function valida() {
    peticion_http = inicializa_xhr();
    if(peticion_http) {
        peticion_http.onreadystatechange = procesaRespuesta;
        peticion_http.open("POST", "http://local.apache/Unit8/T02/Servidor/compruebaDisponibilidadJSON.php",
        true);
        peticion_http.setRequestHeader("Content-Type", "application/json");
        peticion_http.send(crea_query_string());
    }
}

function procesaRespuesta() {
    if(peticion_http.readyState == READY_STATE_COMPLETE && peticion_http.status == 200) {
        var json = eval("("+peticion_http.responseText+")");
        var cadena = json.disponible;
        if (json.alternativas) {
            cadena+="<br>Alternativas:";
            for (var i = 0; i < json.alternativas.length; i++) {
                cadena+="<br>"+json.alternativas[i];
            }
        }
        document.getElementById("disponibilidad").innerHTML = cadena;
    }
}
