import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    // cada vez que se cambia el estado el componente se vuelve a ejecutar el componenet completo
    // los hooks se usan con constantes para que accidentalmenet no modifiquemos el valor
    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => setCounter( (c)=> c + 1);
    
    const handleSubstract = () => setCounter( (c)=> c - 1);
    
    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
        </>
    );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

