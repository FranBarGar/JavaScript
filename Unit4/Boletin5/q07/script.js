function Empleado(nombre="", departamento="General") {
    this.nombre=nombre;
    this.departamento=departamento;
}

function Director(nombre, departamento, informes=[]) {
    Empleado.call(this, nombre, departamento);
    this.informes=informes;
}
Director.prototype = new Empleado();

function Trabajador(nombre, departamento, proyectos=[]) {
    Empleado.call(this, nombre, departamento);
    this.proyectos=proyectos;
}
Trabajador.prototype = new Empleado();

function Ingeniero(nombre, proyectos, maquina="") {
    Trabajador.call(this, nombre, "Ingenieria", proyectos);
    this.maquina=maquina;
}
Ingeniero.prototype = new Trabajador();

e1 = new Empleado();
e2 = new Director();
e3 = new Trabajador();
e4 = new Ingeniero();

console.log(e1);
console.log(e2);
console.log(e3);
console.log(e4);
