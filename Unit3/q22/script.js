var str = `hola que tal,
          soy colosal,
          por que no hay
          quien pare esta frase`;

document.write(str+"<br>");
document.write(str.match(/^ *\w+\S?/mg));
