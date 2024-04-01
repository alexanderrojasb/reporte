import { useState } from 'react'
import { Bloque6 } from './components/Bloque6.jsx'
import { Bloque4 } from './components/Bloque4.jsx'
import { Bloque3 } from './components/Bloque3.jsx'
import { Bloque1 } from './components/Bloque1.jsx'
import { Head } from './components/Head.jsx'

function App() {
  
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-100 py-6 sm:py-12">
      <div className="  sm:mx-auto sm:rounded-lg my-7 w-1152">
          <Head/>
        <div className='flex gap-6'>
          <div>
            <Bloque6/>
            <Bloque1/>
            <Bloque6/>
          </div>
          <div>
            <Bloque4/>
            <Bloque6/>
            <Bloque3/>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default App
