function Vehiculo(marca, modelo, color, anyo){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anyo = anyo;
}

function Furgoneta(marca, modelo, color, anyo, pasajeros){
    Vehiculo.call(this, marca, modelo, color, anyo);
    this.pasajeros = pasajeros;
}
Furgoneta.prototype = new Vehiculo();

function Todoterreno(marca, modelo, color, anyo, traccion){
    Vehiculo.call(this, marca, modelo, color, anyo);
    this.traccion = traccion;
}
Todoterreno.prototype = new Vehiculo();

var v1 = new Todoterreno("Audi", "R7", "Verde fosforito", 2000, 'Gravitatoria');
var v2 = new Furgoneta("Borbaguen", "de los Malacatones", "Blanco mierda", 2000, 5000);
var v3 = new Vehiculo("Ford", "Kuga", "Magenta", 2000);

console.log(v1);
console.log(v2);
console.log(v3);
pintarTabla(v1, v2, v3);

function pintarTabla(...vehiculos) {
    body.innerHTML = `<table id='table' border="1">
                      <thead>
                        <th>MARCA</th>
                        <th>MODELO</th>
                        <th>COLOR</th>
                        <th>AÑO FABRICACIÓN</th>
                      </thead>`;
    for (var i = 0; i < vehiculos.length; i++) {
        table.innerHTML += `<tr id='${i}'>`;
        for (var prop in vehiculos[i]) {
            if (vehiculos[i].hasOwnProperty(prop)) {
                document.getElementById(i).innerHTML += `<td>${vehiculos[i][prop]}</td>`;
            }
        }
        table.innerHTML += `</tr>`;
    }
    body.innerHTML += `</table>`;
}

Vehiculo.prototype.mostrarDatos = function() {
    var toString = "Vehiculo";
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            toString += ` | ${prop}: ${this[prop]}`;
        }
    }
    return toString;
};

Vehiculo.prototype.acelerar = function(velocidad) {
    var toString = `El coche {${this.mostrarDatos()}} ha acelerado hasta ${velocidad} km/h.`;
    console.log(toString);
};

Vehiculo.prototype.arrancar = function() {
    console.log(`El coche de marca ${this.marca}, modelo ${this.modelo}, de color ${this.color} ha arrancado.`);
};

Vehiculo.prototype.frenar = function() {
    console.log(`El coche de marca ${this.marca}, modelo ${this.modelo}, de color ${this.color} ha parado.`);
};
