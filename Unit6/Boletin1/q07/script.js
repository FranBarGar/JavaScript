window.onload = function(){
    var table = document.getElementById('tabla');
    crear.addEventListener('click', function() {
        var numFilas = param("filas");
        var numColum = param("columnas");
        for (var i = 0; i < numFilas; i++) {
            var row = table.insertRow(-1);
            for (var j = 0; j < numColum; j++) {
                var cell = row.insertCell(-1);
                cell.addEventListener('click', function() {
                    this.innerHTML = prompt("Introduzca lo que desee almacenar");
                });
            }
        }
    });
    eliminar.addEventListener('click', function() {
        var i = param("fila a borrar");
        if (i<table.rows.length) {
            table.deleteRow(i);
        } else {
            alert("No existe dicha fila");
        }
    });
    vaciar.addEventListener('click', function() {
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].innerHTML = "";
            }
        }
    });
    añadir.addEventListener('click', function() {
        var numColum = param("columnas");
        var i = param("posicion");
        if (i>=table.rows.length) {
            alert("No existe dicha fila")
            return;
        }
        if (numColum!=0) {
            var row = table.insertRow(-1);
            for (var j = 0; j < numColum; j++) {
                var cell = row.insertCell(-1);
                cell.addEventListener('click', function() {
                    this.innerHTML = prompt("Introduzca lo que desee almacenar");
                });
            }
        }
    });
};

function param(act) {
    do {
        var num = prompt(`Introduzca el numero de ${act} deseado`);
    } while (!/^[0-9]+$/.test(num));
    return parseInt(num);
}
