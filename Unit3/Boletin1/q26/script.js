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
tela tetera
Érase un naricísimo infinito,
muchísimo nariz, nariz tan fiera
que en la cara de Anás fuera delito.`;

document.write(str+"<br>");
document.write(str.match(/\Bte\B/mg).length);
