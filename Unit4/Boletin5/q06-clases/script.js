class Persona {
    constructor(nombre, edad, genero) {
        this._nombre = nombre;
        this._edad = edad;
        this._genero = genero;
        Persona.prototype.obtDetalles = function() {
            var toString = "Persona";
            for (var prop in this) {
                if (this.hasOwnProperty(prop)) {
                    toString += ` | ${prop}: ${this[prop]}`;
                }
            }
            console.log(toString);
        };
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this._curso = curso;
        this._grupo = grupo;
        Estudiante.prototype.registrar = function() {
            console.log(`El alumno ${this.nombre} ha sido matriculado en el curso ${this.curso+this.grupo}`);
        };
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this._asignatura = asignatura;
        this._nivel = nivel;
        Profesor.prototype.asignar = function() {
            console.log(`El profesor ${this.nombre} imparte clases de ${this.asignatura} de nivel ${this.nivel}`);
        };
    }
}

p1 = new Persona("MariaJosé", 20, "Ameba");
p2 = new Estudiante("Ricardo", 20, "Ameba", 2, "B");
p3 = new Profesor("Eduardo", 20, "Ameba", "Programación", "Basico");
console.log(p1);
console.log(p2);
console.log(p3);
p2.registrar();
p3.asignar();
