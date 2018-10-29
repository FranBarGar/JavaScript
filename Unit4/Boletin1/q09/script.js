var ar = [];
var asignaturas = ["DAWEB", "DWEC", "DWES"]

for (i = 0; i < 5; i++) {
    var alumno = [];
    do {
        var nombre = prompt(`Introduzca el nombre de el alumno: `);
    } while (!(/^[a-znáéíóú]+$/i.test(nombre)));
    alumno.push(nombre);
    for (m = 0; m < 3; m++) {
        do {
            var nota = prompt(`Introduzca la nota de el alumno en el modulo ${asignaturas[m]}: `);
        } while (!(/^(([0-9])|(10))$/.test(nota)));
        alumno.push(nota)
    }
    ar.push(alumno);
}

for (var i = 0; i < ar.length; i++) {
        tabla.innerHTML+=`
        <tr>
        <td>${ar[i][0]}</td>
        <td>${ar[i][1]}</td>
        <td>${ar[i][2]}</td>
        <td>${ar[i][3]}</td>
        </tr>`;

}
