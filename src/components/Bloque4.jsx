import React from 'react'
import { Ventas } from './Ventas';
import { Nuevo } from './Nuevo';
import { Contenedor } from './Contenedor';
import { VentasHeader } from './VentasHeader';

export const Bloque4 = () => {
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
          <Ventas/>
      </ul>
    </Contenedor>
  )
}
