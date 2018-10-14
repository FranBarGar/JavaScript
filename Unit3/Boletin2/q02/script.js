if (typeof window.find !== "undefined") {
  window.setTimeout(function(){
    main(false);
  }, 2000);
} else {
  alert(`El navegador no soporta el metodo find.`)
}

function main(exit) {
  if (!exit) {
    calc();
    opc = prompt("Introduzca la opcion deseada: ");
    switch (opc) {
      case "1":
      advFind(param());
      break;
      case "2":
      advFind(param(), true);
      break;
      case "3":
      advFind(param(), true, true);
      break;
      case "4":
      exit = confirm("¿Desea salir del buscador?");
      break;
      default:
      console.log("Opcion no valida.\n")
      timer(exit);
    }
  } else {
    alert(`Programa terminado.`);
  }
}

function calc() {
  console.log(`Metodos de busqueda:
    1. Busqueda global.
    2. Busqueda por palabras.
    3. Busqueda por palabras (Case Sensitive).
    4. Salir.\n`);
  }

  function timer(exit) {
    window.setTimeout(function() {
      main(exit);
    }, 2000);
  }

  function param() {
    do {
      str = prompt(`Introduzca la palabra a buscar`);
    } while (!str);
    return str;
  }

  function advFind(str, isWord=false, iCase=false) {
    if (window.find(str, iCase, false, false, isWord)) {
      window.setTimeout(function() {
        if (confirm(`Coincidencia encontrada. ¿Desea seguir buscando la misma palabra?`)) {
          advFind(str, iCase, isWord);
        } else {
          console.log(`Opcion terminada.`);
          timer(false);
        }
      }, 2000);
    } else {
      alert(`No se han encontrado coincidencias.`);
      timer(false);
    }
  }
