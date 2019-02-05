function Blog(nombre="Doñana") {
    this.__nombre = nombre;
    this.__usuarios = new Set();
}
Blog.prototype.getNombre = function(){
    return this.__nombre;
};
Blog.prototype.getUsuarios = function(){
    return this.__usuarios;
};
Blog.prototype.setUsuario = function(usuario){
    this.__usuarios.add(usuario);
};
Blog.prototype.delUsuario = function(usuario){
    this.__usuarios.delete(usuario);
};

function Usuario(nombre, fechaAlt){
    this.__nombre = nombre;
    this.__fechaAlt = fechaAlt;
}

function Editor(nombre, fechaAlt, entradas=[]) {
    this.__nombre = nombre;
    this.__fechaAlt = fechaAlt;
    this.__entradas = entradas;
}
Editor.prototype = new Usuario();
Editor.prototype.addEntrada = function (entrada) {
    this.__entradas.push(entrada);
}

var b1 = new Blog();
var u1 = new Usuario('pepe', new Date(2018, 1, 10));
var e1 = new Editor('arthur', new Date(2000, 0, 1));
var e2 = new Editor('barba', new Date(), ['muchas']);
b1.setUsuario(u1);
b1.setUsuario(e1);
b1.setUsuario(e2);
b1.getUsuarios().forEach(e => console.log(e));
console.log(b1.getUsuarios());
