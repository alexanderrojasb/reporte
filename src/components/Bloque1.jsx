import React from 'react'
import { VentasNuevo } from './VentasNuevo';
import { VentasHeader } from './VentasHeader';
import { Contenedor } from './Contenedor';

export const Bloque1 = () => {
  return (
    <Contenedor>
      <VentasHeader/>
      <VentasNuevo/>
    </Contenedor>
  )
}
