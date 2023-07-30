import React from 'react'
import { ItemCategoria } from './ItemCategoria';

export function Categorias(){
    return(
        <div className='entero'>
            <h1>Categorias</h1>
            <div className='menu'>
                <ItemCategoria titulo='Deportes' />
                <ItemCategoria titulo='Cine' />
                <ItemCategoria titulo='Musica' />
                <ItemCategoria titulo='Arte' />
            </div>
        </div>
    );
}