var reg = [
    /^\d{2}\.\d{3}\.\d{3}-[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
    /^[a-zñáéíóú]+( [a-zñáéíóú]+){1,3}$/i,
    /^(0[1-9])|([12][0-9])|(3[01])\/(0[1-9])|(1[0-2])\/\d{4}$/i,
    /[a-zñáéíóú][a-zñáéíóú0-9]+@[a-zñáéíóú]+\.[a-zñáéíóú]+/i,
    /http:\/\/www\.[a-zñáéíóú0-9]+\.[a-zñáéíóú0-9]/i,
    /.{8,10}/i,
    /.{8,10}/i,
];
var inputs;

window.onload = function(){
    inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].contador = i;
        inputs[i].addEventListener('change', function(){
            if (!reg[this.contador].test(this.value)){
                this.value = '';
                alert(`Debe introducir el formato indicado en el campo (${this.name})`);
            }
        });
    }
    contraseña.addEventListener('click', function(){
        if (pass.value != confPass.value) {
            pass.value = '';
            confPass.value = '';
            alert('Las contraseñas deben ser iguales');
        } else {
            for (var i = 0; i < inputs.length; i++) {
                setCookie(inputs[i].name, inputs[i].value);
            }
        }
    });
    ver.addEventListener('click', function() {
        pass.type = confPass.type = pass.type=='password'?'text':'password';
    });
};
