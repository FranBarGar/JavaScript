$(()=>{
    $('#boton').on('click', clickCounter);
});

function clickCounter() {
    if (typeof(Storage) !== 'undefined') {
        localStorage.contador = localStorage.contador ? parseInt(localStorage.contador)+1 : 1;
        $('#result').html(`Has hecho click en el boton ${localStorage.contador} veces.`);
    } else {
        $('#result').html('Su navegador no soporta el almacenamiento web en el navegador.');
        $('#boton').off();
    }
}
