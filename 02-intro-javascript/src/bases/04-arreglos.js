

// Arreglos en JS
// no se recomienda usar a excepcion que el arreglo se de tamaño fijo
//const arreglo = new Array(12);

const arreglo = [1,2,3,4];
//arreglo.push(1); // no es recomendable el push
//arreglo.push(2);
//arreglo.push(3);

// Lo recomendable es con spred
let arreglo2 = [ ...arreglo,5];
// MAp crear un nuevo arreglo y con nueva estructura u otros valores
const arreglo3 = arreglo2.map( function(numero) { 
    return numero * 2
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
