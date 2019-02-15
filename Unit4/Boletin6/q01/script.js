var map = new Map();
map.set('DAW', 'Despliegue de aplicaciones web');
map.set('DIW', 'Diseño de interfaces web');
map.set('DWECL', 'Desarrollo web en entorno cliente');
map.set('DWESE', 'Desarrollo web en entorno servidor');
map.set('EIE', 'Empresas, iniciativa emprendedora');

console.log("Muestra cuántos módulos hay almacenados");
console.log(map.size);
console.log("Muestra el contenido de la estructura");
var mostrar = (value,key)=>console.log(`${key} => ${value}`);
map.forEach(mostrar);
console.log("Devuelve las abreviaturas de todos los módulos guardados");
console.log(map.keys());
console.log("Devuelve el nombre completo de todos los módulos");
console.log(map.values());
console.log("Consulta si está el módulo “DAW”");
console.log(map.has('DAW'));
console.log("Si está, elimínalo. Vuelve a mostrar el contenido de la estructura");
if(map.has('DAW')){
    map.delete('DAW');
    console.log("DAW borrado correctamente");
}
map.forEach(mostrar);
