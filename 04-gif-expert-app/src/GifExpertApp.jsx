import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
        if(categories.find( c => c === newCategory)) return;

        setCategories( cat => [newCategory, ...cat]); 
    }
    
    

    return (
        <>
            {/*titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                onNewCategory = {(value) => onAddCategory(value) } 
            />

            {/* Listado de gifs*/}
            <button onClick={ onAddCategory } >Agregar</button>
            <ol>
                { categories.map( category =>  <li key={ category }> { category } </li> )}
            </ol>
                {/* GIF Item */}
        </>
    );
}
