import { UserContext} from './UserContext';

export const UserProvider = ({ children }) => {

    const user = {
        id: 123,
        name: 'Abelardo Irarrázabal',
        email: 'abelardo@gmail.com'
    }

    //Renderizar todos los componentes hijos
    return (
        <UserContext.Provider value={{ hola:'Mundo', user}}>
            { children }
        </UserContext.Provider>
    )
}
