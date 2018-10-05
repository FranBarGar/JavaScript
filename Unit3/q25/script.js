var str = `hola que tal,
          somos colosales,
          lo somos
          por que no hay
          quien nos pare (y a esta frase, tampoco)`;

document.write(str+"<br>");
document.write(str.match(/\S+s\b/mg));
