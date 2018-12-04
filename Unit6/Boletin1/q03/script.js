window.onload = function(){
    insertar.addEventListener('click', function(){
        var li = document.createElement('li');
        var text = document.createTextNode(input.value);
        li.appendChild(text);
        ul.appendChild(li);
    });
};
