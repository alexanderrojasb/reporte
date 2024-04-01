import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import campana from './img/campana.svg'
import documento from './img/documento.svg'

function App() {
  const [count, setCount] = useState(0)
  const bloque1 = 6;
  const bloque2 = 4;
  const bloque3 = 3;
  
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-100 py-6 sm:py-12">
      <div class="  sm:mx-auto sm:rounded-lg my-7 w-1152">
        <header class="flex justify-between  font-nunito">
          <strong class=" text-2xl text-purple-dark">Reportes</strong>
          <div className='flex gap-5'>
            <img src={campana} alt="" />
            <div className=' bg-violet-light flex items-center gap-3 rounded-lg font-nunito'>
              <p className='text-white bg-violet-light2 justify-center rounded-lg py-1 px-2'>Abierto</p>
              <p className='justify-center py-1 pr-2'>Cerrado</p>
            </div>
          </div>
        </header>
        <div className='flex gap-6'>
          <div>
            <div class=" bg-white shadow-container ring-1 ring-gray-900/5 sm:mx-auto rounded-2xl my-7 pt-3 w-563">
              <div className='flex flex-col gap-4'>
                <header className='px-3'>
                  <strong className='text-xl text-purple-dark'>Finanzas</strong>
                </header>
                {Array.from({ length: bloque1 }, (_, index) => (
                  <div className='px-5 py-2 border-b items-center justify-center' key={index}>
                    <div className='flex gap-3'>
                      <img src={documento} alt="" className=' w-6'/>
                      <p className='text-lg'>Ventas</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=' bg-white shadow-container ring-1 ring-gray-900/5 sm:mx-auto rounded-2xl my-7 pt-3 w-563'>
              <div className='flex flex-col gap-4'>
                <header className='px-3'>
                  <strong className='text-xl text-purple-dark'>Finanzas</strong>
                </header>
                <div className='px-5 py-2 border-b items-center'>
                  <div className='flex gap-3 justify-between'>
                    <div className='flex gap-3'>
                      <img src={documento} alt="" className=' w-6'/>
                      <p className='text-lg'>Ventas</p>
                    </div>
                    <p className='text-violet-blue font-nunito'>NUEVO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white shadow-container ring-1 ring-gray-900/5 sm:mx-auto rounded-2xl my-7 pt-3 w-563">
              <div className='flex flex-col gap-4'>
                <header className='px-3'>
                  <strong className='text-xl text-purple-dark'>Finanzas</strong>
                </header>
                {Array.from({ length: bloque1 }, (_, index) => (
                  <div className='px-5 py-2 border-b items-center justify-center' key={index}>
                    <div className='flex gap-3'>
                      <img src={documento} alt="" className=' w-6'/>
                      <p className='text-lg'>Ventas</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className=' bg-white shadow-container ring-1 ring-gray-900/5 sm:mx-auto rounded-2xl my-7 pt-3 w-563'>
              <div className='flex flex-col gap-4'>
                <header className='px-3'>
                  <strong className='text-xl text-purple-dark'>Finanzas</strong>
                </header>
                {Array.from({ length: bloque2 }, (_, index) => (
                  <div className='px-5 py-2 border-b items-center justify-center' key={index}>
                    <div className='flex gap-3'>
                      <img src={documento} alt="" className=' w-6'/>
                      <p className='text-lg'>Ventas</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" bg-white shadow-container ring-1 ring-gray-900/5 sm:mx-auto rounded-2xl my-7 pt-3 w-563">
              <div className='flex flex-col gap-4'>
                <header className='px-3'>
                  <strong className='text-xl text-purple-dark'>Finanzas</strong>
                </header>
                {Array.from({ length: bloque1 }, (_, index) => (
                  <div className='px-5 py-2 border-b items-center justify-center' key={index}>
                    <div className='flex gap-3'>
                      <img src={documento} alt="" className=' w-6'/>
                      <p className='text-lg'>Ventas</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" bg-white shadow-container ring-1 ring-gray-900/5 sm:mx-auto rounded-2xl my-7 pt-3 w-563">
              <div className='flex flex-col gap-4'>
                <header className='px-3'>
                  <strong className='text-xl text-purple-dark'>Finanzas</strong>
                </header>
                {Array.from({ length: bloque3 }, (_, index) => (
                  <div className='px-5 py-2 border-b items-center justify-center' key={index}>
                    <div className='flex gap-3'>
                      <img src={documento} alt="" className=' w-6'/>
                      <p className='text-lg'>Ventas</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default App
