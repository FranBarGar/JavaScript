var regExp = /^(Lunes|Martes|Miercoles|Jueves|Viernes|Sabado|Domingo) (([0][1-9])|([1-2]\d)|([3][01]))$/i;
var day = prompt(`Introduzca el nombre de un dia y 2 digitos: `);

document.write(regExp.test(day)?`Dia correcto: ${day}`:`Dia incorrecto: ${day}<br>Se debe introducir un dia valido: diaSemana diaMes.`);
