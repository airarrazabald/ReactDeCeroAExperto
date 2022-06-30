const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 2322323,
        lat:1.3,
        lng: 1.2
    }
};



// imprimir en consola con el nombre de la variable
console.log({ persona });

// con los tres puntos clonamos objetos
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona2);