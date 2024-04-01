import React from 'react'
import documento from '../img/documento.svg'

export const VentasNuevo = () => {
  return (
    <li className='flex border-b gap-3 px-5 py-2  items-center justify-between'>
        <div className='flex gap-3 py-1'>
            <img src={documento} alt="" className=' w-6'/>
            <p className='text-lg'>Ventas</p>
        </div>
        <strong className='text-violet-blue text-sm  font-nunito'>NUEVO</strong>
    </li>
  )
}
