class Empleado {
    constructor(nombre="", departamento="General") {
        this.nombre=nombre;
        this.departamento=departamento;
    }
}

class Director extends Empleado {
    constructor(nombre, departamento, informes=[]) {
        super(nombre, departamento);
        this.informes=informes;
    }

}

class Trabajador extends Empleado {
    constructor(nombre, departamento, proyectos=[]) {
        super(nombre, departamento);
        this.proyectos=proyectos;
    }
}

class Ingeniero extends Trabajador {
    constructor(nombre, proyectos, maquina="") {
        super(nombre, "Ingenieria", proyectos);
        this.maquina=maquina;
    }
}

e1 = new Empleado();
e2 = new Director();
e3 = new Trabajador();
e4 = new Ingeniero();

console.log(e1);
console.log(e2);
console.log(e3);
console.log(e4);
