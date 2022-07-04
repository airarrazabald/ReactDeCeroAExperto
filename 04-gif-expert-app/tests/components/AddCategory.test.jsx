import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => { 
    test('debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={ () => {} } />); 

        const input = screen.getByRole('textbox');
        

        fireEvent.input( input, { target: { value: 'street fighter' }} );

        expect( input.value ).toBe('street fighter');
     });

     test('debe de llamar onNewCategory si el imput tiene un valor', () => { 
        const inputValue = 'street fighter';
        // función mock en jest
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />); 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }} );
        fireEvent.submit( form );
        // despues del submit el input debe quedar vacio
        expect( input.value ).toBe('');

        // Verificamos qUE LA FUNCIÓN HAYA SIDO LLAMADA
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

      });

      test('no debe llamar el onNewCategory si el input está vacío', () => {

         // función mock en jest
         const onNewCategory = jest.fn();
 
         render(<AddCategory onNewCategory={ onNewCategory } />); 

         const form = screen.getByRole('form');
         fireEvent.submit( form );

         // al ser input vacio no debe llamara la función niguna vez
         expect( onNewCategory).toHaveBeenCalledTimes(0);
         expect( onNewCategory).not.toHaveBeenCalled() ;

      });
});