
import { useState } from 'react';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => setCategories( cat => [ ...cat,'KOF']); 

    console.log(categories);

    return (
        <>
            {/*titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}

            {/* Listado de gifs*/}
            <button onClick={ onAddCategory } >Agregar</button>
            <ol>
                { categories.map( category =>  <li key={ category }> { category } </li> )}
            </ol>
                {/* GIF Item */}
        </>
    );
}
