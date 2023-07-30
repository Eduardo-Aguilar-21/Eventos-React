import React from 'react'
import { render } from '@testing-library/react'
import { ItemCategoria } from '../MenuEventos/Categorias/ItemCategoria';

describe('Renderizado de categorias', () => {
    test('renders with correct props', () => {
        const titulo = 'Categoria de ejemplo';
        const descripcion = 'Descripción del evento';

        const { getByText } = render(
            <ItemCategoria titulo={titulo} />
        );

        const tituloElement = getByText(titulo);

        expect(tituloElement).toBeInTheDocument();
    });
});