import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', ()=> {
    test('getSaludo debe retornar Hola Abelardo', () => {
        const name = 'Abelardo';
        const message = getSaludo(name)
        const message2 = `Hola ${name}`; 

        expect( message ).toBe( message2 );
    });  
});