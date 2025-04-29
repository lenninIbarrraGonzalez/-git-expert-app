import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    // test('debe agregar una nueva categoría si no existe', () => {
    //     render(<GifExpertApp />);

    //     const input = screen.getByRole('textbox');
    //     const form = screen.getByRole('form');

    //     // Simular ingreso de texto y envío
    //     fireEvent.input(input, { target: { value: 'Dragon Ball' } });
    //     fireEvent.submit(form);

    //     expect(screen.getByText('Dragon Ball')).toBeTruthy();
    // });

    // test('no debe agregar una categoría si ya existe', () => {
    //     render(<GifExpertApp />);

    //     const input = screen.getByRole('textbox');
    //     const form = screen.getByRole('form');

    //     // One Punch ya existe
    //     fireEvent.input(input, { target: { value: 'One Punch' } });
    //     fireEvent.submit(form);

    //     // Solo debe haber una vez 'One Punch'
    //     const items = screen.getAllByText('One Punch');
    //     expect(items.length).toBe(1);
    // });

});