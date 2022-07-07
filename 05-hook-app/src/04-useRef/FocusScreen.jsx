import { useRef } from "react";

export const FocusScreen = () => {

    //Nos ayuda a tener una referencia 
    //Cuando la referencia cambia no renderiza el componenete solo la referencia
    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>

            <hr />

            <input 
                ref={ inputRef }
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button 
                className="btn btn-primary mt-2"
                onClick={ onClick }
            >
                Set Focus
            </button>
        </>
        

    );
}
