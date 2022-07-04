import { render, screen } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGrid } from '../../src/components/GifGrid';

// mock del hook usefetchgifs
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'Street fighter';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue ({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category) );
    });

    test('debe de mostrar items cuando se carguen las imagenes useFethcGifs', () => {
        const gifs = [
            {
                id:'ABC',
                title: 'Street fighters',
                url:'Streetfighters.com'
            },
            {
                id:'ABCD',
                title: 'Street fighters 2',
                url:'Streetfighters2.com'
            }
        ];
        
        // mock devolviendo data
        useFetchGifs.mockReturnValue ({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/> );

        expect( screen.getAllByRole('img').length ).toBe(2);
    });

});

