import React from 'react'
import { Ventas } from './Ventas';
import { VentasNuevo } from './VentasNuevo';
import { VentasHeader } from './VentasHeader';
import { Contenedor } from './Contenedor';

export const Bloque3 = () => {
  return (
    <Contenedor>
        <VentasHeader/>
        <ul className=''>
            <VentasNuevo/>
            <Ventas/>
            <VentasNuevo/>
        </ul>
    </Contenedor>
  )
}