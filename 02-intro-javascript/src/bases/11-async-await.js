

const getImagen = async () => {
    try {
        const apiKey = '7FNIkB7rpJ40EUkRHYf8vzenFgY91Fd4';

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append( img );
    } catch (error) {
        // Manejo del error
        console.error(error);
    }
}

getImagen();


// peticion
//     .then( resp => resp.json() )
//     .then( ({ data }) => { 
//         const { url } =  data.images.original;
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );

//         console.log(url);
//     })
//     .catch( console.warn );