var vector = [];
var vector2 = [];

inicializarVector(10);

function inicializarVector(a) {
    for (var i = 0; i < a; i++) {
        vector[i] = parseInt((Math.random()*1001));
    }
    console.log(`Vector inicial: \n${vector}
Numero menor: \n${Math.min(...vector)}
Numero mayor: \n${Math.max(...vector)}`);
    //Para sacar una copia de un array se usa slice
    for (var i = 0; i < vector.length; i++) {
        if (vector[i]!=Math.min(...vector) && vector[i]!=Math.max(...vector)) {
            vector2.push(vector[i]);
        }
    }
    console.log(`Vector sin los valores maximos ni minimos: \n${vector2}`);
}
