// a & b
function Vehiculo(marca, modelo, color, anyo){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anyo = anyo;
}

// c
var v1 = new Vehiculo("Audi", "R7", "Verde fosforito", 2000);
var v2 = new Vehiculo("Ford", "Kuga", "Magenta", 2000);

// d
console.log(`Marca: ${v1.marca}`);

// e
console.log(`Color: ${v2['color']}`);

Vehiculo.prototype.toString = function() {
    var toString = "Vehiculo";
        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                toString += ` | ${prop}: ${this[prop]}`;
            }
        }
    return toString;
};

// f
Vehiculo.prototype.mostrarDatos = function() {
    console.log(this.toString());
};
v1.mostrarDatos();
v2.mostrarDatos();

// g
Vehiculo.prototype.acelerar = function(velocidad) {
    var toString = `El coche {${this.toString()}} ha acelerado hasta ${velocidad} km/h.`;
    console.log(toString);
};
v1.acelerar(100);
v2.acelerar(100);

// h
Vehiculo.prototype.arrancar = function() {
    console.log(`El coche de marca ${this.marca}, modelo ${this.modelo}, de color ${this.color} ha arrancado.`);
};
v1.arrancar();
v2.arrancar();

// i
