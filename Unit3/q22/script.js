var str = `Érase un hombre a una nariz pegado,
érase una nariz superlativa,
érase una nariz sayón y escriba,
érase un peje espada muy barbado.

Era un reloj de sol mal encarado,
érase una alquitara pensativa,
érase un elefante boca arriba,
era Ovidio Nasón más narizado.

Érase un espolón de una galera,
érase una pirámide de Egipto,
las doce Tribus de narices era.

Érase un naricísimo infinito,
muchísimo nariz, nariz tan fiera
que en la cara de Anás fuera delito.`;

var regExp = /(^|\. )[A-ZÁ-ÚÑ]+\S/img;

document.write(str+"<br>");
var exec = regExp.exec(str);
while (exec) {
  document.write(exec[0]+" ");
  exec = regExp.exec(str);
}
