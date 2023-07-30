import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ItemMenu } from '../MenuEventos/ItemMenu';

describe('ItemMenu component', () => {
  test('renders with correct props', () => {
    const titulo = 'Titulo del evento';
    const descripcion = 'Descripción del evento';
    
    const { getByText } = render(
      <MemoryRouter>
        <ItemMenu titulo={titulo} descripcion={descripcion} />
      </MemoryRouter>
    );
    
    const tituloElement = getByText(titulo);
    const descripcionElement = getByText(descripcion);
    
    expect(tituloElement).toBeInTheDocument();
    expect(descripcionElement).toBeInTheDocument();
  });
});
