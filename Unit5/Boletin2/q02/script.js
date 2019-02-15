var reg = [
    '\\d{2}\\.\\d{3}\\.\\d{3}-[TRWAGMYFPDXBNJZSQVHLCKE]',
    '^[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+( [A-ZÑÁÉÍÓÚ][a-zñáéíóú]+){1,3}$',
    '^(0[1-9])|([12][0-9])|(3[01])\/(0[1-9])|(1[0-2])\/[0-9]{4}$',
    '^[0-9]|(10)$',
    '^[a-zñáéíóú][a-zñáéíóú0-9]+@[a-zñáéíóú]+\\.[a-zñáéíóú]+$',
    '^http://www\\.[a-zñáéíóú0-9]+\\.[a-zñáéíóú0-9]+$',
    '^.{8,10}$',
    '^.{8,10}$',
];
var place = [
    '99.999.999-X',
    'Xxxx Xxxx',
    'dd/mm/yyyy',
    '0-10',
    'xxx@yyy.zzz',
    'http://www.xxxx.yyy',
    '8-10 caracteres',
    '8-10 caracteres',
];
var inputs;


window.onload = function(){
    inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].placeholder=place[i];
        inputs[i].pattern = reg[i];
        inputs[i].addEventListener('change', function(){
            if (p=document.getElementsByTagName('span')[0]) {
                formulario.removeChild(p);
            }
            if (!this.checkValidity()){
                let par = document.createElement('span');
                let txt = document.createTextNode(`Debe introducir el formato indicado en el campo (${this.name})`);
                par.appendChild(txt);
                this.parentNode.insertBefore(par, this.nextSibling);
                this.value = '';
            }
        });
    }
    hijos.max = 10;
    hijos.min = 0;

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
