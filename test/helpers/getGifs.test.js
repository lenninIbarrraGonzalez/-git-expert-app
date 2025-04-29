import 'whatwg-fetch';
import { getGifs } from "../../src/helpers/GetGifs";

describe('Pruebas al helper getGifs', () => {
    test('debe retornar un arreglo de gifs', async() => { 
        const gifs = await getGifs('dragon');
        //console.log(gifs)
        //evaluo que el arreglo tenga un tamaño mayor a 0
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            image: expect.any(String)
        });
    });
})