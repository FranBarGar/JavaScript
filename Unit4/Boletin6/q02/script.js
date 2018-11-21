var daw={
    nombre: "Despliegue de aplicaciones web",
    duracion: 100
};
var diw={
    nombre: "Diseño de interfaces web",
    duracion: 200
};
var dwecl={
    nombre: "Desarrollo web en entorno cliente",
    duracion: 300
};
var dwese={
    nombre: "Desarrollo web en entorno servidor",
    duracion: 200
};
var eie={
    nombre: "Empresa, iniciativa emprendedora",
    duracion: 150
};
var weakMap= new WeakMap();
weakMap.set(daw, 3);
weakMap.set(diw, 5);
weakMap.set(dwecl, 9);
weakMap.set(dwese, 1);
weakMap.set(eie, 7);
console.log(weakMap.get(daw));
console.log(weakMap.get(diw));
console.log(weakMap.get(dwecl));
console.log(weakMap.get(dwese));
console.log(weakMap.get(eie));
