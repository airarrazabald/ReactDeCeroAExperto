import { act, renderHook } from '@testing-library/react';
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

    test('Test debe incrementar el contador', () => { 
         const { result } = renderHook( () => useCounter() );
         const { counter, increment } = result.current;
        act(() => {
            increment();
            increment(2);
        });
         

         expect( result.current.counter ).toBe(4);
     })

     test('Test debe decrementar el contador', () => { 
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement} = result.current;
        act(() => {
                increment(2);
                decrement(1);
        });
        
        expect( result.current.counter ).toBe(2);
    })

    test('Test debe resetear el contador', () => { 
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset} = result.current;
        act(() => {
                increment(2);
                decrement(1);
                reset();
        });
        
        expect( result.current.counter ).toBe(1);
    })


});