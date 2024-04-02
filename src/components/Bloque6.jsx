import React from 'react'
import { Ventas } from './Ventas';
import documento from '../img/documento.svg'
import { VentasHeader } from './VentasHeader';
import { Contenedor } from './Contenedor';
import { Nuevo } from './Nuevo.jsx'


export const Bloque6 = () => {

    const rep3 = 3;

  return (

    <Contenedor>
        <VentasHeader/>
        <ul className=''>
            <Ventas/>
            <Ventas/>
            <Ventas>
                <Nuevo/>
            </Ventas>
            {Array.from({ length: rep3 }, (_, index) => (
            <li className='flex border-b gap-3 px-5 py-2  items-center justify-between' key={index}>
                <div className='flex gap-3 py-1'>
                    <img src={documento} alt="" className=' w-6'/>
                    <p className='text-lg'>Ventas</p>
                </div>
            </li>
            ))}
        </ul>
    </Contenedor>
    
  )
}
