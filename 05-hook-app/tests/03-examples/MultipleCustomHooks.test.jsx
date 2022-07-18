import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

// mock de useFetch
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter:1,
        increment: mockIncrement
    });

    beforeEach( () => {
        // limpiamos las funciones mock de en cada una de las pruebas
        // para asegurar pruebas limpias
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data:null,
            isLoading:true,
            hasError:null
        });

        render(<MultipleCustomHooks /> );

        expect( screen.getAllByText('Loading...'));
        expect( screen.getAllByText('Breaking bad quotes'));
        
        // se puede buscar por el name o tambien se puede implementar aria-label
        const nextButton = screen.getByRole('button',{name:'Next Quote'});

        expect( nextButton.disabled).toBeTruthy();
    });

    test('debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data:[{author:'Abelardo', quote:'punto net es genial'}],
            isLoading:false,
            hasError:null
        });


        render(<MultipleCustomHooks /> );

        expect( screen.getByText('punto net es genial') ).toBeTruthy();
        expect( screen.getByText('Abelardo') ).toBeTruthy();

        const nextButton = screen.getByRole('button',{name:'Next Quote'});
        expect( nextButton.disabled ).toBeFalsy();
    });

    test('debe de llamar función de incrementar', () => {

        useFetch.mockReturnValue({
            data:[{author:'Abelardo', quote:'punto net es genial'}],
            isLoading:false,
            hasError:null
        });

        render(<MultipleCustomHooks /> );

        const nextButton = screen.getByRole('button',{name:'Next Quote'});

        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();


    });

});
