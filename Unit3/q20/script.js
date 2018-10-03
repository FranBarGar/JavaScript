var regExp = /^\d{4}[b-df-hj-npr-tv-z]$/i;
var matr = prompt(`Introduzca una matricula moderna: `);

document.write(regExp.test(matr)?`Matricula correcta: ${matr}`:`Matricula incorrecta: ${matr}`);
