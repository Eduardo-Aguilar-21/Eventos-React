import React from 'react';
import { ItemMenu } from './ItemMenu';

export function Home() {
  return (
    <div className='entero'>
      <h1>Proximos eventos</h1>
      <div className='menu'>
        <ItemMenu
          titulo="Rock en el parque"
          descripcion="Evento de tocada con multiples bandas de Rock"
        />

        <ItemMenu
          titulo="Rock en el parque"
          descripcion="Evento de tocada con multiples bandas de Rock"
        />
        <ItemMenu
          titulo="Rock en el parque"
          descripcion="Evento de tocada con multiples bandas de Rock"
        />
        <ItemMenu
          titulo="Rock en el parque"
          descripcion="Evento de tocada con multiples bandas de Rock"
        />
      </div>
    </div>
  );
} 
