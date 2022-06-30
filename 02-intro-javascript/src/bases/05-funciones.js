
// no es recomendable crear funciones de esta forma
// su valor puede mutar facilmente
// function saludar ( nombre ) {
//     return `Hola, ${ nombre } `;
// }

// es mejor en una constante para que su valor no mute
// const saludar = function saludar ( nombre ) {
//     return `Hola, ${ nombre } `;
// }

// las funciones de flecha con mas acotadas
const saludar2 = (nombre) => {
    return `Hola, ${nombre} `;
}

const saludar3 = (nombre) => `Hola, ${nombre} `;

const saludar4 = () => `Hola `;


console.log(saludar2('Goku'));
console.log(saludar3('Vegeta'));
console.log(saludar4());


const getUser = () => ({
    uid: "ABC123",
    username: "Abe123"
});

console.log(getUser());

// Tarea
const getUsuarioActivo = ( nombre ) => ({
    uid: "ABC123",
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Abelardo')

console.log(usuarioActivo);