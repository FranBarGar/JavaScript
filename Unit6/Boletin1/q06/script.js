window.onload = function() {
    var random = document.getElementById('generado').getElementsByTagName('input');
    genera.addEventListener('click', function(){
        for (var i = 0; i < random.length; i++) {
            random[i].value = parseInt(Math.random()*10+1);
        }
    });
    comprueba.addEventListener('click', function(){
        var res;
        var pos = 0;
        for (var i = 0; i < random.length; i++) {
            if (res) {
                if (res<parseInt(random[i].value)) {
                    res = random[i].value;
                    pos = i;
                }
            } else {
                res = parseInt(random[i].value);
            }
        }
        random[pos].value = "";
        resultado.value = res;
    });
};
