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
        inputs[i].pattern = reg[i];
        inputs[i].addEventListener('change', function(){
            if (!this.validity.patternMissmatch){
                this.value = '';
                alert(`Debe introducir el formato indicado en el campo (${this.name})`);
            } else if (!this.validity.valueMissing) {
                alert(`El campo (${this.name}) es obligatorio`);
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

    verCookie.addEventListener('click', function() {
        var str = prompt('Introduzca la cookie que desea visualizar');
        alert(getCookie(str)==null?'No existe dicha cookie':`El valor de ${str} es ${getCookie(str)}`);
    });

    verTodas.addEventListener('click', function() {
        for (var i = 0; i < inputs.length; i++) {
            alert(getCookie(inputs[i].name)==null?`No existe cookie para ${inputs[i].name}`:`El valor de ${inputs[i].name} es ${getCookie(inputs[i].name)}`);
        }
    });

    eliminar.addEventListener('click', function() {
        var str = prompt('Introduzca la cookie que desea eliminar');
        if (getCookie(str)==null) {
            alert('No existe dicha cookie');
        } else {
            delCookie(str);
            alert('Cookie eliminada correctamente');
        }
    });

    eliminarTodas.addEventListener('click', function() {
        for (var i = 0; i < inputs.length; i++) {
            delCookie(inputs[i].name);
        }
        alert('Cookies eliminadas correctamente');
    });
};
