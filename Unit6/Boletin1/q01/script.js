window.onload = function (){
    opciones.addEventListener('change', function(){
        var select = document.getElementsByTagName('option')[opciones.selectedIndex];
        var tag = select.getAttribute('tag').split(',');
        var clase = select.value.split(',');

        for (var i = 0; i < tag.length; i++) {
            colorear(document.getElementsByTagName(tag[i]), clase[i]);
        }
    });
};

function colorear (enlaces, clase) {
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].setAttribute('class', clase);
    }
}
