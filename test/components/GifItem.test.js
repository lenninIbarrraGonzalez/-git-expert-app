import {render,screen} from "@testing-library/react";
import {GifItem} from "../../src/components/GifItem"


describe('pruebas al componente GifItem', () => { 

    const title = 'Saitama';
    const image = 'https://one-punch.com/saitama.jpg';

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<GifItem title={title} image={image}/>);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el url y el alt indicado', () => { 
        render(<GifItem title={title} image={image}/>);
        screen.debug();
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(image);    
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} image={image}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})