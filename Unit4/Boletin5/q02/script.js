function ProductoAlimenticio(codigo, nombre, precio){
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
}

ProductoAlimenticio.prototype.imprimeDatos = function() {
    var toString = "Producto Alimenticio";
        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                toString+=` | ${prop}: ${this[prop]}`;
            }
        }
        console.log(toString);
};

var p1 = new ProductoAlimenticio(1, "a", 2);
p1.imprimeDatos();
var p2 = new ProductoAlimenticio(2, "b", 3);
p2.imprimeDatos();
var p3 = new ProductoAlimenticio(3, "c", 4);
p3.imprimeDatos();
