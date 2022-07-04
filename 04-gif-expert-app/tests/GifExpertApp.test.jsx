import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => { 

    test('debe hacer match con el snapshot', () => { 
        const { container } = render( <GifExpertApp /> );
        
        expect( container ).toMatchSnapshot();
    })


    test('debe coincidir el titulo de la web', () => { 
        const title = 'GifExpertApp';
        const defaultCategory = 'Dragon Ball';

       render( <GifExpertApp /> );

       expect(screen.getByRole('heading', {level: 1}).innerHTML).toBe(title);
       expect(screen.getByRole('heading', {level: 3}).innerHTML).toBe(defaultCategory);
        
        
    })
});