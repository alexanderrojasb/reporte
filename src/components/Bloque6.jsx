import React from 'react'
import { Ventas } from './Ventas';
import documento from '../img/documento.svg'
import { VentasNuevo } from './VentasNuevo';


export const Bloque6 = () => {

    const rep3 = 3;

  return (

    <div className=" bg-white shadow-container ring-1 ring-gray-900/5 sm:mx-auto rounded-2xl my-7 pt-3 w-563">
        <header className='px-3'>
            <strong className='text-xl text-purple-dark'>Finanzas</strong>
        </header>
        <ul className=''>
            <VentasNuevo/>
            <Ventas/>
            <VentasNuevo/>
            {Array.from({ length: rep3 }, (_, index) => (
            <li className='flex border-b gap-3 px-5 py-2  items-center justify-between' key={index}>
                <div className='flex gap-3 py-1'>
                    <img src={documento} alt="" className=' w-6'/>
                    <p className='text-lg'>Ventas</p>
                </div>
            </li>
            ))}
        </ul>
    </div>
    
  )
}
