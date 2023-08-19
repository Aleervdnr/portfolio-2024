export function DividerOpen() {
  return (
    <div className=' relative overflow-hidden h-[70px] bg-anaranjado'>
        <div className='absolute w-full top-[10px] bg-black opacity-10 blur-2xl clip-open h-[250px]'></div>
        <div className='absolute w-full top-[6px] bg-white clip-open h-[250px]'></div>
        <div className='absolute w-full top-0 bg-fondo-negro clip-open h-[250px]'></div>
    </div>
  )
}

export function DividerClose(){
    return(
        <div className=' relative overflow-hidden h-[70px] bg-anaranjado'>
            <div className='absolute w-full top-[2px] bg-black opacity-10 blur-2xl clip-close h-[250px]'></div>
            <div className='absolute w-full top-[6px] bg-white clip-close h-[250px]'></div>
            <div className='absolute w-full top-[10px] bg-fondo-negro clip-close h-[250px]'></div>
        </div>
    )
}

export function DividerOpen2() {
  return (
    <div className=' relative overflow-hidden h-[70px] bg-anaranjado'>
        <div className='absolute w-full top-[9px] bg-black opacity-10 blur-xl clip-open-2 h-[250px]'></div>
        <div className='absolute w-full top-[5px] bg-white clip-open-2 h-[250px]'></div>
        <div className='absolute w-full top-[-1px] bg-fondo-negro clip-open-2 h-[250px]'></div>
    </div>
  )
}

export function DividerClose2(){
  return(
      <div className=' relative overflow-hidden h-[70px] bg-anaranjado'>
          <div className='absolute w-full top-[6px] bg-black opacity-10 blur-xl clip-close-2 h-[250px]'></div>
          <div className='absolute w-full top-[10px] bg-white clip-close-2 h-[250px]'></div>
          <div className='absolute w-full top-[14px] bg-fondo-negro clip-close-2 h-[250px]'></div>
      </div>
  )
}