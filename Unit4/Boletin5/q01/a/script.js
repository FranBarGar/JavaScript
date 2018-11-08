// a & b
function Vehiculo(marca, modelo, color, anyo){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anyo = anyo;
    this.arrancar = function() {
        console.log(`El coche de marca ${this.marca}, modelo ${this.modelo}, de color ${this.color} ha arrancado.`);
    };
}

// c
var v1 = new Vehiculo("Audi", "R7", "Verde fosforito", 2000);
var v2 = new Vehiculo("Ford", "Kuga", "Magenta", 2000);

// d
// console.log(`Marca: ${v1.marca}`);

// e
// console.log(`Color: ${v2['color']}`);

// f
Vehiculo.prototype.mostrarDatos = function() {
    var toString = "Vehiculo";
        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                toString += ` | ${prop}: ${this[prop]}`;
            }
        }
    return toString;
};
// console.log(v1.mostrarDatos());
// console.log(v2.mostrarDatos());

// g
Vehiculo.prototype.acelerar = function(velocidad) {
    var toString = `El coche {${this.mostrarDatos()}} ha acelerado hasta ${velocidad} km/h.`;
    console.log(toString);
};
// v1.acelerar(100);
// v2.acelerar(100);

// h
// v1.arrancar();
// v2.arrancar();

// i
Vehiculo.prototype.cilindrada;
// v1.cilindrada = 1000;
// console.log(v1.mostrarDatos());

// j
Vehiculo.prototype.frenar = function(){
        console.log(`El coche de marca ${this.marca}, modelo ${this.modelo}, de color ${this.color} ha parado.`);
    };
// v1.frenar();

// k
Object.defineProperties(v1, {
    marca: {
        writable: true,
        configurable: false,
        enumerable: true,
        // value: v1.marca
    },
    modelo: {
        writable: false,
        configurable: true,
        enumerable: true,
        value: 'xx'
    },
    mostrarDatos: {
        writable: true,
        configurable: true,
        enumerable: false,
        // value: v1.mostrarDatos
    },
    acelerar: {
        writable: true,
        configurable: true,
        enumerable: false,
        // value: v1.acelerar
    },
    arrancar: {
        writable: true,
        configurable: true,
        enumerable: false,
        // value: v1.arrancar
    },
    frenar: {
        writable: true,
        configurable: true,
        enumerable: false,
        // value: v1.frenar
    },
});
console.log(v1.mostrarDatos());
v1.arrancar();
v1.acelerar(100);
v1.frenar();

// l
delete v1.marca;
v1.modelo = "Clara";
console.log(v1.mostrarDatos());

// m
var toString = "Vehiculo";
for (var prop in v1) {
    toString += ` | ${prop}`;
}
console.log(toString);
console.log(Object.getOwnPropertyNames(v1));
console.log(Object.keys(v1));
