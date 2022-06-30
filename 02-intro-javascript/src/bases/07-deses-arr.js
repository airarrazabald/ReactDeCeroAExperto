const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , ,p3 ] = personajes;


console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123]
}

const [ letras, numeros ] = retornaArreglo();

//Tarea
const states = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo')} ];
}

const [ nombre, SetNombre ] = states('Goku');

console.log( nombre);
SetNombre()