import React from 'react'
import { Ventas } from './Ventas';
import { VentasNuevo } from './VentasNuevo';
import { Contenedor } from './Contenedor';
import { VentasHeader } from './VentasHeader';

export const Bloque4 = () => {
  return (
    <Contenedor>
      <VentasHeader/>
      <ul className=''>
          <VentasNuevo/>
          <Ventas/>
          <VentasNuevo/>
          <Ventas/>
      </ul>
    </Contenedor>
  )
}
