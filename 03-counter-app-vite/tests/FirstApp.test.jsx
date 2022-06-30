import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {  
    // test('debe de hacer match con el snapshot', () => {
    //     const title = 'Hola, soy Rugal'
        
    //     const { container } = render( <FirstApp title={ title } /> );

    //     // Realiza un snapshot del html renderizado del componente
    //     // lo guarda en la carpeta __snhapshots__
    //     expect ( container ).toMatchSnapshot();
    // });

    test('Debe de mostrar el titulo en un h1', () => {
        const title = 'Hola soy Rugal';

        const { getByText } = render( <FirstApp title={title } /> );

        // Para saber si se encuentra
        expect ( getByText(title).innerHTML).toContain(title);

        // const h1 = container.querySelector('h1');

        // expect( h1.innerHTML ).toContain( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        const title = 'Hola soy Rugal';
        const subTitle = 'Soy un subtitulo';

        const { getAllByText } = render( 
            <FirstApp title={title} subTitle={subTitle} /> 
        );

        expect( getAllByText(subTitle).length ).toBe(2);

    });
});