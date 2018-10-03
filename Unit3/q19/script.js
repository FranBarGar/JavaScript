var regExp =/^([01]\d|[2][0-3])(:[0-5]\d){1,2}$/;
var hour = prompt(`Introduzca una hora con o sin segundos: `);

document.write(regExp.test(hour)?`Hora correcta: ${hour}`:`Hora no valida: ${hour}<br>El formato correcto es hh:mm:ss o hh:mm`);
