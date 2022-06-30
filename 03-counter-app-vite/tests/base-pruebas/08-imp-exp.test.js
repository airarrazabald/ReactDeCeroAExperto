import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe retornar undefined si no existe el id', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy();
    });

    test('getHeroeByOwner debe retornar heroes de DC', () => { 
        const owner = 'DC';
        
        const heroesResult = getHeroesByOwner(owner);

        expect( heroesResult).toHaveLength( 3 );
        expect( heroesResult ).toEqual( heroes.filter((heroes) => heroes.owner == owner ) );
        
    });

    test('getHeroeByOwner debe retornar heroes de Marvel', () => { 
        const owner = 'Marvel';
        
        const heroes = getHeroesByOwner(owner);
        
        expect( heroes ).toHaveLength( 2 );
    });
});