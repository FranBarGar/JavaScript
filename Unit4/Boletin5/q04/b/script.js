function Factura(cliente, elementos, info) {
    var cliente = cliente;
    var elementos = elementos;
    var info = info;
    var calcularTotal = function(){
        this.info.total = this.info.base*(100+this.info.iva)/100;
    };
    var mostrarTotal = function(){
        console.log(this.info.total);
    };
}

Factura.prototype.empresa = new Empresa("Barba S.L.", "Andorra", "99999999Z");

function Cliente(nombre, direccion, telefono, nif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
}

function Info(base=0, iva=21, total=0, forma="contado") {
    this.base = base;
    this.iva = iva;
    this.total = total;
    this.forma = forma;
}

function Empresa(nombre, direccion, cif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.cif = cif;
}

c1 = new Cliente("Barba", "ESPAÑA", "+34 100200300", "1A");
i1 = new Info(3270, 21);
f1 = new Factura(c1, ["Una pexhá de cosas", "100", "Maquillado"], i1);
f1.mostrarTotal();
