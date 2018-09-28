var now = new Date();
var born = new Date(1996, 1, 15);

document.write(`Mi edad en milisegundos: ${now-born}<br>Mi edad en años: ${Math.trunc((now-born)/1000/60/60/24/365)}`);
