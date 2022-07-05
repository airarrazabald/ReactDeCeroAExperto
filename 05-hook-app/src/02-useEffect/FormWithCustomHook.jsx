import React from 'react';
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const { username, email, password, formState,onInputChange} = useForm ({
        username: '',
        email:'',
        password:''
    });


    // sirve para disparara eventos secundarios
    // Se recomienda crear un useEffect por cada evento que realices
    // useEffect( () => {
    //     console.log('Se llamo use effect');
    // },[]);

    // useEffect( () => {
    //     console.log('form change');
    // },[ formState ]);

    // useEffect( () => {
    //     console.log('email change');
    // },[ email ]);


    


    return (
        <>
            <h1>Formulario Con Custom Hook</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange= { onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="abelardo@gmail.com"
                name="email"
                value={ email }
                onChange= { onInputChange }
            />

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange= { onInputChange }
            />      

           

            
        </>
    )
}
