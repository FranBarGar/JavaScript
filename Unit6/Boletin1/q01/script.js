window.onload = function (){
    opciones.addEventListener('change', function(){
        var select = document.getElementsByTagName('option');
        for (var i = 0; i < select.length; i++) {
            if (select[i].selected) {
                clase = select[i].value;
                tag = select[i].name;
            }
        }

        var enlaces = document.getElementsByTagName(tag);
        for (var i = 0; i < enlaces.length; i++) {
            enlaces[i].setAttribute('class', clase);
        }
    });
};
