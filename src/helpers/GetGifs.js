export const getGifs = async(category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=MyGBUlCzIXusyIx2sEpWdoTEZEe869xi&q=${category}&limit=20`

    const resp = await fetch(url);
    // console.log(resp);
    const {data} = await resp.json();
    //console.log(data);

    const gifs = data.map((img) => (
        {
            id: img.id,
            title: img.title,
            image: img.images.downsized_medium.url
        }
    ));

    console.log(gifs);

    return gifs;
}