window.onload = function(){
    window.onresize = function(){
        div.innerHTML = `Alto => ${window.innerWidth.toString()} <br>
        Ancho => ${window.innerHeight.toString()}`;
    };
    div.innerHTML = `Alto => ${window.innerWidth.toString()} <br>
    Ancho => ${window.innerHeight.toString()}`;
};
