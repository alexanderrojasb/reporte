import React from 'react'
import { Nuevo } from './Nuevo';
import { VentasHeader } from './VentasHeader';
import { Contenedor } from './Contenedor';
import { Ventas } from './Ventas'

export const Bloque1 = () => {
  return (
    <Contenedor>
      <VentasHeader/>
      <Ventas>
        <Nuevo/>
      </Ventas>
    </Contenedor>
  )
}
