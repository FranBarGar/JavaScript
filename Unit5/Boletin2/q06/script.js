window.onload = function(){
    var date = new Date(2019,11,1);
    var total = getCookie('encuesta')==null?0:parseInt(getCookie('encuesta'));
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
                getCookie(encuesta[i].value)==null?setCookie(encuesta[i].value, 1, date):setCookie(encuesta[i].value, parseInt(getCookie(encuesta[i].value))+1, date);
                setCookie('encuesta', getCookie('encuesta')==null?1:parseInt(getCookie('encuesta'))+1, date);
            }
        }
    });
};
