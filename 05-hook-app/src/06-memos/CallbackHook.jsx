import { useState, useCallback } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // es parecido a use memo pero sirve para memorizar funciones
    //se puee combinar con React.memo
    const incrementFather = useCallback(
        (value) => {
            setCounter( (c) => c + value);
        },
        [],
    );


    return (
        <>
            <h1> useCallback Hook: { counter } </h1>
            <hr />

            <ShowIncrement  increment={ incrementFather }  />
        </>
        
    );
}
