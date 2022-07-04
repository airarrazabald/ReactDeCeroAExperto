import { transformWithEsbuild } from 'vite';
import { getGifs } from '../../src/helpers/getGifs'

describe('Pruebas en getGifs()', () => { 
    test('debe retornar un arreglo de gifs', async () => { 

        const gifs = await getGifs('street fighters');

        expect(gifs.length ).toBeGreaterThan(0);

        expect( gifs[0] ).toEqual({
            id: expect.anything( String ) ,
            title: expect.anything( String ) ,
            url: expect.anything( String )
        })
    });
});