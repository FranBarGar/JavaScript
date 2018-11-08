function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

Persona.prototype.obtDetalles = function() {
    var toString = "Persona";
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            toString += ` | ${prop}: ${this[prop]}`;
        }
    }
    console.log(toString);
};

function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
}
Estudiante.prototype = new Persona();
Estudiante.prototype.registrar = function() {
    console.log(`El alumno ${this.nombre} ha sido matriculado en el curso ${this.curso+this.grupo}`);
};

function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
}
Profesor.prototype = new Persona();
Profesor.prototype.asignar = function() {
    console.log(`El profesor ${this.nombre} imparte clases de ${this.asignatura} de nivel ${this.nivel}`);
};

p1 = new Persona("MariaJosé", 20, "Ameba");
p2 = new Estudiante("Ricardo", 20, "Ameba", 2, "B");
p3 = new Profesor("Eduardo", 20, "Ameba", "Programación", "Basico");
console.log(p1);
console.log(p2);
console.log(p3);
p2.registrar();
p3.asignar();
