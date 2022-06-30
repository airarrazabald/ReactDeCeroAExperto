describe('Prueba de <DemoComponent>', () => {
    test('Esta prueba no debe de fallar', () => {
        // Inicialización
        const message1 = 'Hola mundo';
    
        // Estimulo
        const message2 = message1.trim();
    
        // Observar el comportamiento esperado
        expect( message1 ).toBe( message2 );
    });
});
