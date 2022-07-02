

export const getGifs = async( category ) => {
    const apiKey = '7FNIkB7rpJ40EUkRHYf8vzenFgY91Fd4';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=12`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
} 