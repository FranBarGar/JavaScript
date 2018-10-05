var str = `hola que tel,
          eres colosalete,
          lo eres
          por que no hay
          quien te pare (makina, fiera, figura)(y a esta frase, tampoco)`;

document.write(str+"<br>");
document.write(str.match(/\S*te\S*/mg).length);
