setTimeout(function() {
  loop(1);
}, 1000);

function loop(i) {
  if (i == 5) {
    i=1;
  }
  document.images[0].src = `a${i}.jpeg`;
  setTimeout(function() {
    loop(++i);
  }, 1000);
}
