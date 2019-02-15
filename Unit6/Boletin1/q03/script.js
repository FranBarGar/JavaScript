window.onload = function(){
    insertar.addEventListener('click', function(){
        var li = document.createElement('li');
        var text = document.createTextNode(input.value);
        li.appendChild(text);
        ul.appendChild(li);
        input.value = "";
    });
    eliminar.addEventListener('click', function(){
        var lis = document.getElementsByTagName('li');
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].firstChild.data.trim() == "") {
                ul.removeChild(lis[i])
                i--;
            }
        }
    });
    duplicar.addEventListener('click', function(){
        var node = ul.lastChild.cloneNode(true);
        ul.appendChild(node);
    });
};
