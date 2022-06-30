// Desestructuración
// Asignación destructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const { nombre, edad, clave} = persona;

console.log( nombre );
console.log( edad );
console.log( clave );


const returnContext = ( { clave, nombre, edad, rango = 'Capitan'} ) => {

    //console.log( nombre , edad, rango);
    return {
        nombreClave: clave,
        anios:edad,
        lating: {
            lat: 14.3,
            lng: -12.3
        }
    }
}

const { nombreClave, anios, lating:{ lat, lng } } = returnContext( persona );

console.log( nombreClave, anios );
console.log(lat, lng)