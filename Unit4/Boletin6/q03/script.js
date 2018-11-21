var daw= "Despliegue de aplicaciones web";
var diw= "Diseño de interfaces web";
var dwecl= "Desarrollo web en entorno cliente";
var dwese= "Desarrollo web en entorno servidor";
var eie= "Empresas, iniciativa emprendedora";

var alumno1= new Set();
alumno1.add(daw);
alumno1.add(diw);
console.log(alumno1.values());
console.log(`El Maria Jose tiene aprobadas ${alumno1.size} asignaturas`);
console.log(alumno1.has(daw));
console.log(alumno1.has(eie));

var alumno2= new Set();
alumno2.add(dwecl);
alumno2.add(dwese);
alumno2.add(eie);
console.log(alumno2.values());
console.log(`Castillo reventao tiene aprobadas ${alumno2.size} asignaturas`);
console.log(alumno2.has(daw));
console.log(alumno2.has(eie));
