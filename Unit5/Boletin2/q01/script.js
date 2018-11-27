var reg = [
    /^\d{2}\.\d{3}\.\d{3}-[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
    /^[a-zñáéíóú]+( [a-zñáéíóú]+){1,3}$/i,
    /^(0[1-9])|([12][0-9])|(3[01])\/(0[1-9])|(1[0-2])\/\d{4}$/i,
    /[a-zñáéíóú][a-zñáéíóú0-9]+@[a-zñáéíóú]+\.[a-zñáéíóú]+/i,
    /http:\/\/www\.[a-zñáéíóú0-9]+\.[a-zñáéíóú0-9]/i,
    /.{8,10}/i,
    /.{8,10}/i,
];

window.onload = function(){
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].pattern = reg[i];
        inputs[i].addEventListener('invalid', function(){
            alert(`Debe introducir el formato indicado en el campo (${this.name})`);
        });
    }
    ver.addEventListener('click', function() {
        pass.type = confPass.type = pass.type=='password'?'text':'password';
    });
};
