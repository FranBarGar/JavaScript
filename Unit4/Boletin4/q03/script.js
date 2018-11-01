var tweets = [
    `Érase un hombre a una nariz pegado,
érase una nariz superlativa,
érase una nariz sayón y escriba,
érase un peje espada muy barbado.

Era un reloj de sol mal encarado,
érase una alquitara pensativa,
érase un elefante boca arriba,
era Ovidio Nasón más narizado.

Érase un espolón de una galera,
érase una pirámide de Egipto,
las doce Tribus de narices era.

Érase un naricísimo infinito,
muchísimo nariz, nariz tan fiera
que en la cara de Anás fuera delito.`,
    `Se conoce como software​ al soporte
lógico de un sistema informático, que
comprende el conjunto de los componentes
lógicos necesarios que hacen posible la
realización de tareas específicas, en
contraposición a los componentes físicos
que son llamados hardware. La interacción
entre el software y el hardware hace operativo
un ordenador (u otro dispositivo), es decir,
el Software envía instrucciones que el Hardware
ejecuta, haciendo posible su funcionamiento.`,
    `Hola que tal, soy colosal`,
    `La planta piraña como personaje jugable. -Diego "el pagafantas"`,
    `Voy a por los putos quickscopes y a tomar por culo. -Alejandro "lafu"`,
];

console.log(`La primera letra de cada tweet debe estar en mayúscula.
${tweets.every(elem=>/^([A-ZÑÁ-Ú]+)/.test(elem))}`);

var tweetsLength = tweets.map(elem=>elem.length);
console.log(`Devolver en un nuevo array las longitudes de cada tweet.
${tweetsLength}`);

var soft = elem=>/software/i.test(elem);
console.log(`Comprobar si el usuario habla en alguno de sus tweets sobre ‘software’.
${tweets.some(soft)}`);

console.log(`En caso afirmativo, muéstralo por consola`);
tweets.filter(soft).forEach(elem=>console.log(elem));

console.log(`Comprobar si todas las entradas cumplen la antigua restricción de Twitter (inferior a 140 caracteres)
${tweetsLength.every(elem=>elem<=140)}`);

console.log(`¿Cuántos caracteres ha escrito el usuario de media?
${tweetsLength.reduce((total, sum)=>total+sum, 0)/tweetsLength.length}`);
