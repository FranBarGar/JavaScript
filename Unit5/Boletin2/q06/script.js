var total;

window.onload = function(){
    total = getCookie('encuesta')==null?0:parseInt(getCookie('encuesta'));

    var encuesta = document.getElementsByName('encuesta');
    var resultado = document.getElementsByName('resultado');
    for (var i = 0; i < resultado.length; i++) {
        if (getCookie(encuesta[i].value)!=null) {
            resultado[i].value = parseInt(getCookie(encuesta[i].value))/total*100;
        }
    }

    votar.addEventListener('click', function(){
        for (var i = 0; i < encuesta.length; i++) {
            if (encuesta[i].checked) {
                getCookie(encuesta[i].value)==null?setCookie(encuesta[i].value, 1):setCookie(encuesta[i].value, parseInt(getCookie(encuesta[i].value))+1);
                setCookie('encuesta', getCookie('encuesta')==null?1:parseInt(getCookie('encuesta'))+1);
            }
        }
    });
};
