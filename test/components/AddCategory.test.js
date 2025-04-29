import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en el componente addCategory', () => {
    test('debe cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory = { () => {} } />);
        //screen.debug();
        //Extraemos el input
        const input = screen.getByRole('textbox');
        //disparamos el evento
        fireEvent.input( input, { target: { value: 'Saitama'}});
        //Lo que estamos esperando
        expect(input.value).toBe('Saitama');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Saitama'; 
        const onNewCategory = jest.fn();

        //sugeto de pruebas
        render(<AddCategory onNewCategory = { onNewCategory } />);
        //Extraemos el input
        const input = screen.getByRole('textbox');
        //extraemos el formulario.
        const form = screen.getByRole('form');
        //disparamos el evento del input
        fireEvent.input( input, { target: { value: inputValue}});
        //disparamos el evento del form
        fireEvent.submit(form);
        //screen.debug();
        //evaluo que una vez se dispara el submit se limpia el value del input
        expect(input.value).toBe('');

        //valida si la funcion fue llamada
        expect(onNewCategory).toHaveBeenCalled();
        //valida el numero de veces que la funcion es llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //valida que la funcion sea llamada con el valor del inputValue
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('no debe llamar al onNewCategory si el input est´vació', () => {
        const onNewCategory = jest.fn();
        //sugeto de pruebas
        render(<AddCategory onNewCategory = { onNewCategory } />);
        const form = screen.getByRole('form');
        //disparamos el evento del form
        fireEvent.submit(form);
        //valida el numero de veces que la funcion es llamada
        expect(onNewCategory).toHaveBeenCalledTimes(0);

        //screen.debug();

    })
});