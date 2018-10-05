var str = `hola que tal,
          soy colosal,
          lo soy
          por que no hay
          quien me pare (y a esta frase, tampoco)`;

document.write(str+"<br>");
document.write(str.match(/\blo\S*/mg));
