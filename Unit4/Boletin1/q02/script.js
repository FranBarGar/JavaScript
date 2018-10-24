var ar = ["Aqui no hay nada", 1.21, 1.10, 1.05];

//obtenerImporteConImpuestos(985.45, 1);

function obtenerImporteConImpuestos(valor, impuesto) {
    if (!isNaN(impuesto) && !isNaN(impuesto)) {
        var impuesto = parseInt(impuesto) || 1;
        var res;
        if ( impuesto>=1 && impuesto<=3) {
            res = ar[impuesto]*valor;
        } else {
            res = "Error: tipo de impuesto no valido.";
        }
        console.log(res.toFixed(2));
    } else {
        console.log("Error: algun parametro no es un numero.");
    }
}
