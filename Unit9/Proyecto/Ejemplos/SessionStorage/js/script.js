$(()=>{
    $('#boton').on('click', clickCounter);
});

function clickCounter() {
    if (typeof(Storage) !== 'undefined') {
        sessionStorage.contador = sessionStorage.contador ? parseInt(sessionStorage.contador)+1 : 1;
        $('#result').html(`Has hecho click en el boton ${sessionStorage.contador} veces.`);
    } else {
        $('#result').html('Su navegador no soporta el almacenamiento web en el navegador.');
        $('#boton').off();
    }
}
