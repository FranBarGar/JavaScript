var ar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function throwXDices(x) {
    if (x != 0) {
        var d1 = Math.floor((Math.random()*6)+1);
        var d2 = Math.floor((Math.random()*6)+1);
        document.forms[0].elements[0].value = d1;
        document.forms[0].elements[1].value = d2;
        ar[d1+d2-2]++;
        setTimeout(function() {
            throwXDices(--x);
        }, 1000);
    } else {
        for (var i = 0; i < ar.length; i++) {
            // document.write(`<p>El resultado ${i+2} ha salido: ${ar[i]} veces</p>`); Tema 6
            console.log(`El resultado ${i+2} ha salido: ${ar[i]} veces`);
            console.log(`\n`);
        }
    }
}
