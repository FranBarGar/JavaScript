var regExp = /^\d{1,3}\.\d{1,3}$/
var coord = prompt(`Introduzca una coordenada: `);

document.write(regExp.test(coord)?`Coordenada correcta: ${coord}`:`Coordenada incorrecta: ${coord}`);
