Array.prototype.eliminarValor = function(valor) {
    let self = this;
    return self.filter(elem => elem !== valor);
};

ar = [1,2,3,4,5,6,7,8,1];
console.log(ar);
console.log(ar.eliminarValor(1));
