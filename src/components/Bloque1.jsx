import React from 'react'
import { VentasNuevo } from './VentasNuevo';

export const Bloque1 = () => {
  return (
    <div className=' bg-white shadow-container ring-1 flex flex-col gap-4 ring-gray-900/5 sm:mx-auto rounded-2xl my-7 pt-3 w-563'>
      <header className='px-3'>
          <strong className='text-xl text-purple-dark'>Finanzas</strong>
      </header>
      <VentasNuevo/>
    </div>
  )
}
