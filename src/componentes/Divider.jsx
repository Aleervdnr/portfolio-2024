import React from 'react'

export function DividerOpen() {
  return (
    <div className=' relative overflow-hidden h-[70px] bg-anaranjado'>
        <div className='absolute w-full top-[10px] bg-black opacity-10 clip-open h-[250px]'></div>
        <div className='absolute w-full top-[6px] bg-white clip-open h-[250px]'></div>
        <div className='absolute w-full top-0 bg-fondo-negro clip-open h-[250px]'></div>
    </div>
  )
}

export function DividerClose(){
    return(
        <div className=' relative overflow-hidden h-[70px] bg-anaranjado'>
            <div className='absolute w-full top-[-10px] bg-black opacity-10 clip-close h-[250px]'></div>
            <div className='absolute w-full top-[-6px] bg-white clip-close h-[250px]'></div>
            <div className='absolute w-full top-0 bg-fondo-negro clip-close h-[250px]'></div>
        </div>
    )
}
