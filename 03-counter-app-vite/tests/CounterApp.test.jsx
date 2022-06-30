import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {
    const value = 100;

    test('Debe de hacer match con el snapshot', () => {  
        const { container } = render(<CounterApp value={value}/>);
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100', () => {  
        render(<CounterApp value={value}/>);
        expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain( value.toString() );
    });

    test('debe de incrementar con el boton +1', () => {  
        render(<CounterApp value={ 10 }/>);

        fireEvent.click( screen.getByText('+1')  );

        expect( screen.getAllByText('11') ).toBeTruthy();
    });

    test('debe de decrementar con el boton -1', () => {  
        render(<CounterApp value={ 10 }/>);

        fireEvent.click( screen.getByText('-1')  );

        expect( screen.getAllByText('9') ).toBeTruthy();
    });

    test('debe de funcionar el boton de reset', () => {  
        render(<CounterApp value={ 10 }/>);

        fireEvent.click( screen.getByText('+1')  );
        fireEvent.click( screen.getByText('+1')  );
        fireEvent.click( screen.getByText('+1')  );

        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' } ) );

        expect( screen.getByText('10')  ).toBeTruthy();
    });


});