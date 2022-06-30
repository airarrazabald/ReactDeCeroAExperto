import heroes, { owners } from '../data/heroes';

console.log( owners );

const getHeroeById = id  => heroes.find( h => h.id === id);
const getHeroeByOwner = owner  => heroes.filter( h => h.owner === owner);

export { getHeroeById , getHeroeByOwner };

