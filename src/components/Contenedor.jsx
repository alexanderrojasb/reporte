import React, { Children } from 'react'

export const Contenedor = ({children}) => {
  return (
    <div className=" bg-white shadow-container flex flex-col gap-4 ring-1 ring-gray-900/5 sm:mx-auto rounded-2xl my-7 pt-3 w-563">
        {children}
    </div>
  )
}
