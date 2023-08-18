import { useState } from "react"

export default function Header({items}) {

    const [menuIsOpen, setMenuIsOpen] = useState(`max-lg:translate-x-[400px]`)
  return (
    <header className='fixed bg-fondo-negro w-full h-[70px] lg:h-[100px] px-6 lg:px-28 flex z-50'>

        <nav className="w-full grid justify-end">
            <ul className={`absolute w-[180px] h-screen bg-fondo-menu p-8 grid grid-rows-[repeat(4,35px)] gap-8 top-0 right-0 ${menuIsOpen} transition-transform duration-700 delay-150 lg:static lg:flex lg:h-[100px] lg:w-full lg:bg-transparent lg:p-0 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:place-items-center`}>
                <Close setMenu={setMenuIsOpen}/>
                {items.map((item)=>{
                    return(
                        <li 
                            key={item}
                            className="relative overflow-hidden text-anaranjado capitalize grid place-content-center lg:p-0 hover:text-black after:bg-anaranjado after:w-full after:h-11 after:absolute after:-translate-y-12 after:hover:translate-y-0 after:z-0 after:transition-transform after:ease-linear after:duration-700 after:delay-0 transition-colors">
                            <a
                                className="z-10 w-full grid place-content-center text-xl"
                                href={`#${item.split(' ').join('')}`}>{item}</a>
                        </li>
                    )

                    })
                }

            </ul>
        
            <Burger setMenu={setMenuIsOpen}/>
        </nav>
    </header>
  )
}

function Burger({setMenu}) {
    return(
        <div
            onClick={()=>setMenu(`translate-x-0`)} 
            className="grid gap-[5px] h-[13px] self-center lg:hidden">
            <div className="w-[25px] h-[1px] bg-white"></div>
            <div className="w-[25px] h-[1px] bg-white"></div>
            <div className="w-[25px] h-[1px] bg-white"></div>
        </div>
    )
}

function Close({setMenu}){
    return(
        <div
            onClick={()=>setMenu(`max-lg:translate-x-[400px]`)} 
            className="relative w-[35px] h-[35px] before:absolute before:w-[35px] before:h-[1px] before:bg-white before:rotate-45 after:absolute after:w-[35px] after:h-[1px] after:bg-white after:-rotate-45 after:top-[18px] before:top-[18px] justify-self-end lg:hidden">

        </div>
    )
}
