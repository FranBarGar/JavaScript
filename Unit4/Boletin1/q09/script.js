var ar = [];

for (i = 0; i < 5; i++) {
    var alumno = [];
    do {
        var nombre = prompt(`Introduzca el nombre de el alumno: `);
    } while (!(/^[a-znáéíóú]+$/i.test(nombre)));
    alumno.push(nombre);
    for (m = 0; m < 3; m++) {
        do {
            var nota = prompt(`Introduzca la nota de el alumno en el modulo${m+1}: `);
        } while (!(/^(([0-9])|(10))$/.test(nota)));
        alumno.push(nota)
    }
    ar.push(alumno);
}

for (var i = 0; i < ar.length; i++) {
        tabla.innerHTML+=`
        <tr>
        <th>${ar[i][0]}</th>
        <th>${ar[i][1]}</th>
        <th>${ar[i][2]}</th>
        <th>${ar[i][3]}</th>
        </tr>`;

}
