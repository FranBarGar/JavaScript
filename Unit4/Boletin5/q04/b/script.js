function Factura(cliente, elementos, info) {
    var cliente = cliente;
    var elementos = elementos;
    var info = info;
    calcularBase();
    calcularTotal();

    function calcularTotal(){
        info.setTotal(info.getBase()*(100+info.getIva())/100);
    };
    function calcularBase() {
        base = 0;
        for (var i = 0; i < elementos.length; i++) {
            base += elementos[i].getPrecio()*elementos[i].getCantidad();
        }
        info.setBase(base);
    }
    this.mostrarTotal = function(){
        console.log(info.getTotal());
    };
}

Factura.prototype.empresa = {
                             nombre:"Barba Tapadera S.L.",
                             direccion:"Andorra",
                             cif:"99999999Z"
                            };

function Cliente(nombre, direccion, telefono, nif) {
    var nombre = nombre;
    var direccion = direccion;
    var telefono = telefono;
    var nif = nif;
}

function Elemento(descripcion, cantidad, precio) {
    var descripcion = descripcion;
    var cantidad = cantidad;
    var precio = precio;

    this.getPrecio = function() {
        return precio;
    };
    this.getCantidad = function() {
        return cantidad;
    };
}

function Info(iva=21, forma="contado") {
    var base = base;
    var iva = iva;
    var total = total;
    var forma = forma;

    this.setTotal = function(num) {
        total = num;
    };
    this.setBase = function(num) {
        base = num;
    };
    this.getTotal = function() {
        return total;
    };
    this.getBase = function() {
        return base;
    };
    this.getIva = function() {
        return iva;
    };
}

c1 = new Cliente("Barba", "ESPAÑA", "+34 100200300", "1A");
i1 = new Info(3270, 21);
e1 = [new Elemento("Aceitunas", 100, 3), new Elemento("Pistachos", 100, 3), new Elemento("Coca-Cola", 5, 2)];
f1 = new Factura(c1, e1, i1);
console.log(c1);
console.log(i1);
console.log(f1);
f1.mostrarTotal();
