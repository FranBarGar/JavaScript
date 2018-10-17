function random() {
  var opc = Math.floor(Math.random()*3);
  switch (opc) {
    case 0:
    location.assign("https://hotmail.com");
    break;
    case 1:
    location.assign("https://gmail.com");
    break;
    case 2:
    location.assign("https://yahoo.com");
    break;
    default:
    console.log(`Fallo inesperado`);
  }
}
