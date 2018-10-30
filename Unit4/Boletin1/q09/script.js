var asignaturas = ["DAWEB", "DWEC", "DWES"];

mostrarTabla(pedirAlumnos(5));

function pedirNotas(alumno) {
    for (var i = 0; i < 3; i++) {
        do {
            var nota = prompt(`Introduzca la nota de el alumno en el modulo ${asignaturas[i]}: `);
        } while (!(/^(([0-9])|(10))$/.test(nota)));
        alumno.push(nota)
    }
}

function pedirNombre(alumno) {
    do {
        var nombre = prompt(`Introduzca el nombre de el alumno: `);
    } while (!(/^[a-znáéíóú]+$/i.test(nombre)));
    alumno.push(nombre);
}

function pedirAlumnos(num) {
    var ar = [];
    for (i = 0; i < num; i++) {
        var alumno = [];
        pedirNombre(alumno);
        pedirNotas(alumno);
        ar.push(alumno);
    }
    return ar;
}

function mostrarTabla(ar) {
    for (var i = 0; i < ar.length; i++) {
        tabla.innerHTML+=`<tr id="${i}">`;
        for (var j = 0; j < ar[i].length; j++) {
            document.getElementById(`${i}`).innerHTML+=`<td>${ar[i][j]}</td>`;
        }
        tabla.innerHTML+=`<tr>`;
    }
}
