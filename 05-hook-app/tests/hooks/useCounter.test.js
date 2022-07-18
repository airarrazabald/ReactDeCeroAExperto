import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks';

describe('Pruebas en el UseCounter', () => {

    test('debe de retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );
        
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(1);
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));
    });

    test('debe de generar el counter con el valor de 100', () => {
        const initialValue = 100;
        const { result } = renderHook( () => useCounter(initialValue) );
        
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(initialValue);

    });

});