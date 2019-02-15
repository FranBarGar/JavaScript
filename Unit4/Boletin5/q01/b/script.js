function Vehiculo(marca, modelo, color, anyo){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anyo = anyo;
}

var v1 = new Vehiculo("Audi", "R7", "Verde fosforito", 2000);
var v2 = new Vehiculo("Ford", "Kuga", "Magenta", 2000);
var v3 = new Vehiculo();

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

Vehiculo.prototype.cilindrada;

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

Object.defineProperties(v1, {
    marca: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: v1.marca
    },
    modelo: {
        writable: false,
        configurable: true,
        enumerable: true,
        value: v1.modelo || 'xx'
    },
    mostrarDatos: {
        writable: true,
        configurable: true,
        enumerable: false,
        value: v1.mostrarDatos
    },
    acelerar: {
        writable: true,
        configurable: true,
        enumerable: false,
        value: v1.acelerar
    },
    arrancar: {
        writable: true,
        configurable: true,
        enumerable: false,
        value: v1.arrancar
    },
    frenar: {
        writable: true,
        configurable: true,
        enumerable: false,
        value: v1.frenar
    },
});
