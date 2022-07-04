import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem/>', () => {
    
    const title = 'One Piece';
    const url = 'http://testing.cl/one-piece.png';

    test('debe hacer match con el snapshot', () => { 
        const { container } =render(<GifItem title={ title } url={ url }  />);

        expect( container ).toMatchSnapshot();
        
     });

     test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={ title } url={ url }  />);

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe(url);
        expect( alt ).toBe(title);
     });

     test('Debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={ title } url={ url }  />);
        
        expect( screen.getByText( title )).toBeTruthy();
     });
 });