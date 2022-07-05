import React , { useEffect, useState } from 'react'
import {  } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email:'abelardo@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({ 
            ...formState, 
            [ name ]: value
        });

        console.log(event.target.value);
    };

    // sirve para disparara eventos secundarios
    // Se recomienda crear un useEffect por cada evento que realices
    useEffect( () => {
        console.log('Se llamo use effect');
    },[]);

    useEffect( () => {
        console.log('form change');
    },[ formState ]);

    useEffect( () => {
        console.log('email change');
    },[ email ]);


    


    return (
        <>
            <h1>Formulario Simple</h1>
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

            {
                username == 'strider2' && <Message />
            }

            
        </>
    )
}
