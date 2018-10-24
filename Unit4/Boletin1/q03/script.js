var obtenerImporteConImpuestos =  function(valor) {
    if (!isNaN(valor)) {
        var ret = ["Aqui no hay nada", (1.21*valor).toFixed(2), (1.10*valor).toFixed(2), (1.05*valor).toFixed(2)];
        console.log(ret);
    } else {
        console.log("Error: algun parametro no es un numero.");
    }
}
