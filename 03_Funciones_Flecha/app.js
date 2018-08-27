const mi = require('./mito');

let rpta = mi.sumar(10,5);
let rpta2 = mi.sumar(10,5);
let rpta3 = mi.mostrar(10);
let rpta4 = mi.mostrar2(10);

console.log(rpta);
console.log(rpta2);
console.log(rpta3);
console.log(rpta4);

setTimeout(() => {
   console.log('Termine!'); 
}, 2000);