import { act,renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks';

describe('purebas en el useForm', () => { 
    test('debe de regresar los valores por defecto', () => { 
        const initialForm = {
            name: 'Abelardo',
            email: 'abelardo@gmail.com'
        }

        const { result } = renderHook( () => useForm(initialForm) );

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        });
     });

    test('debe de cambiar el nombre del formulario', () => {
        const initialForm = {
            name: 'Abelardo',
            email: 'abelardo@gmail.com'
        }
        const newValue = 'Juan';

        const { result } = renderHook( () => useForm(initialForm) );

        act(() =>{
            result.current.onInputChange({ target: {name: 'name', value: newValue}});
        });

        expect(result.current.name).toBe(newValue);
     });

    test('debe realizar el reset del formulario', () => {
        const initialForm = {
            name: 'Abelardo',
            email: 'abelardo@gmail.com'
        }
        const newValue = 'Juan';

        const { result } = renderHook( () => useForm(initialForm) );
        
        act(() =>{
            result.current.onInputChange({ target: {name: 'name', value: newValue}});
            result.current.onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.email).toBe(initialForm.email);
     });
 })