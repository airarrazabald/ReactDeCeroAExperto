import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks'

describe('Pruebas en <MultipleCustomHooks />', () => {
    test('debe de mostrar el componente por defecto', () => {
        render(<MultipleCustomHooks /> );

        expect( screen.getAllByText('Loading...'));
        expect( screen.getAllByText('Breaking bad quotes'));
        
        // se puede buscar por el name o tambien se puede implementar aria-label
        const nextButton = screen.getByRole('button',{name:'Next Quote'});

        expect( nextButton.disabled).toBeTruthy();
    });

});
