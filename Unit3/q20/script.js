var regExp = /^\d{4}[b-df-hj-npr-tv-z]{3}$/i;
var matr = prompt(`Introduzca una matricula moderna: `);

document.write(regExp.test(matr)?`Matricula correcta: ${matr}`:`Matricula incorrecta: ${matr}`);
