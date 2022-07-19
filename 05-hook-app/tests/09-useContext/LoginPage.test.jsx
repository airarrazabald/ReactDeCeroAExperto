import { fireEvent, render, screen, act } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';


describe('Pruebas en <LoginPage />', () => {
    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={ { user: null } } >
                <LoginPage />
            </UserContext.Provider> 
        );

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML ).toBe('null');
    });

    test('debe de llamar el setUser cuando hace click en el boton', () => {
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={ { user: null, setUser: setUserMock } } >
                <LoginPage />
            </UserContext.Provider> 
        );

        
        const buttonElement = screen.getByRole('button');

        fireEvent.click( buttonElement )

        expect( setUserMock ).toHaveBeenCalledWith({"email": "juan@gmail.com", "id": 123, "name": "Juan"});

    });
});