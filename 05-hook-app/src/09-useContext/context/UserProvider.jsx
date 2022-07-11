import { useState } from 'react';
import { UserContext} from './UserContext';

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({})




    //Renderizar todos los componentes hijos
    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
