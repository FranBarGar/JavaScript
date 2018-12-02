window.onload = function (){
    var img = document.getElementsByTagName('img');
    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener('click', function(){
            let text = document.createTextNode(this.getAttribute('alt'));
            let aux = document.getElementsByTagName('p')[0];
            if (aux) {
                aux.replaceChild(text, aux.childNodes[0]);
            } else {
                let p = document.createElement("p");
                p.appendChild(text);
                document.body.appendChild(p);
            }
        });
    }
};
