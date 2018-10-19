var ar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function main() {
  for (var i = 0; i < 10; i++) {
    throwDices();
  }

  // document.write(form);
  for (var i = 0; i < ar.length; i++) {
    // document.write(`<p>El resultado ${i+2} ha salido: ${ar[i]} veces</p>`);
    console.log(`El resultado ${i+2} ha salido: ${ar[i]} veces`);
    console.log(`\n`);
  }
}

function throwDices() {
  var d1 = Math.floor((Math.random()*6)+1);
  var d2 = Math.floor((Math.random()*6)+1);
  document.forms[0].elements[0].value = d1;
  document.forms[0].elements[1].value = d2;
  ar[d1+d2-2]++;
}
