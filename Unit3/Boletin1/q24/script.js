var str = `Érase un hombre a una nariz pegado,
érase una nariz superlativa,
érase una nariz sayón y escriba,
érase un lo peje espada muy barbado.

Era un reloj de sol mal encarado,
érase una alquitara pensativa,
érase un elefante boca arriba,
era Ovidio Nasón más narizado.

Érase un lo espolón de una galera,
érase una pirámide de Egipto,
las doce Tribus de narices era.

Érase un lorena polo naricísimo infinito,
muchísimo nariz, nariz tan fiera
que en la cara de Anás fuera delito.`;

document.write(str+"<br>");
document.write(str.match(/\blo[A-ZÁ-ÚÑ]*/mg));
