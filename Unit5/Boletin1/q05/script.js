window.onload = function(){
    window.addEventListener('click', function(e){
        div.style.background='#FFFF00';
        div.innerHTML = `Coordenada ventana (${e.clientX},${e.clientY})
        <br>Coordenada pantalla (${e.screenX},${e.screenY})`;
    });
    window.addEventListener('mousemove', function(e){
        div.style.background='#FFFFFF';
        div.innerHTML = "";
    });
    window.addEventListener('keydown', function(e){
        div.style.background='#CCE6FF';
        div.innerHTML = `Tecla pulsada => ${e.code}
        <br>Codigo numerico => ${e.keyCode}`;
    });
};
