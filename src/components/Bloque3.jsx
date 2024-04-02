import React from 'react'
import { Ventas } from './Ventas';
import { Nuevo } from './Nuevo';
import { VentasHeader } from './VentasHeader';
import { Contenedor } from './Contenedor';

export const Bloque3 = () => {
  return (
    <Contenedor>
        <VentasHeader/>
        <ul className=''>
            <Ventas>
              <Nuevo/>
            </Ventas>
            <Ventas/>
            <Ventas>
              <Nuevo/>
            </Ventas>
        </ul>
    </Contenedor>
  )
}