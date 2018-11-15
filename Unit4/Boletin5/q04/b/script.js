function Factura(cliente, elementos, info) {
    var cliente = cliente;
    var elementos = elementos;
    var info = info;
    calcularTotal();

    function calcularTotal(){
        info.setTotal(info.getBase()*(100+info.getIva())/100);
    };
    this.mostrarTotal = function(){
        console.log(info.getTotal());
    };
}

Factura.prototype.empresa = new Empresa("Barba Tapadera S.L.", "Andorra", "99999999Z");

function Cliente(nombre, direccion, telefono, nif) {
    var nombre = nombre;
    var direccion = direccion;
    var telefono = telefono;
    var nif = nif;
}

function Info(base=0, iva=21, total=0, forma="contado") {
    var base = base;
    var iva = iva;
    var total = total;
    var forma = forma;

    this.setTotal = function(num) {
        total = num;
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

function Empresa(nombre, direccion, cif) {
    var nombre = nombre;
    var direccion = direccion;
    var cif = cif;
}

c1 = new Cliente("Barba", "ESPAÑA", "+34 100200300", "1A");
i1 = new Info(3270, 21);
f1 = new Factura(c1, ["Una pexhá de cosas", "100", "Maquillado"], i1);
console.log(c1);
console.log(i1);
console.log(f1);
f1.mostrarTotal();
