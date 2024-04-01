import React from 'react'
import campana from '../img/campana.svg'

export const Head = () => {
  return (
    <header className="flex justify-between  font-nunito">
        <strong className=" text-2xl text-purple-dark">Reportes</strong>
        <div className='flex gap-5'>
        <img src={campana} alt="" />
        <div className=' bg-violet-light flex items-center gap-3 rounded-lg font-nunito'>
            <p className='text-white bg-violet-light2 justify-center rounded-lg py-1 px-2'>Abierto</p>
            <p className='justify-center py-1 pr-2'>Cerrado</p>
        </div>
        </div>
    </header>
  )
}
