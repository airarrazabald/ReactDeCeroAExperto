import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { MemoryRouter,Routes, Route } from 'react-router-dom';
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('Pruebas en el <PrivateRoute />', () => {

    test('debe de mostrar el children si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id:'ABC',
                name: 'Abelardo'
            }   
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
               
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta Privada')).toBeTruthy();
    });


})