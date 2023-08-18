export default function Trabajos() {
  return (
    <div className="bg-fondo-negro py-4 px-6 lg:px-28">

        <h2 className="relative w-fit text-2xl text-anaranjado uppercase m-auto after:absolute after:w-full after:h-[2px] after:bg-anaranjado after:top-0 after:left-[-10px] before:absolute before:w-full before:h-[2px] before:bg-anaranjado before:bottom-0 before:right-[-10px] mb-6">Trabajos</h2>

        <div className="grid place-content-center gap-8  auto-rows-[15rem] grid-cols-[repeat(auto-fill,19rem)]">
            <TrabajoItem 
                img="bg-[url('./assets/quinta.jpg')]" 
                title="Quinta la sabina" 
                type="landing page"
                url="https://quintalasabina.com.ar/"/>

            <TrabajoItem 
                img="bg-[url('./assets/bot.jpg')]" 
                title="lightning p2p bot" 
                type="Landing page" 
                url="https://lnp2pbot.com/"/>
        </div>
    </div>
  )
}

function TrabajoItem({img="bg-white",title="Title",url,type="type" }){
    return(
        <div className="relative grid max-w-[296px] pl-[8px]">
            <div className={`bg-anaranjado w-72 h-44 before:absolute before:w-72 before:h-44 before:bg-fondo-menu before:-translate-x-2 before:translate-y-2 after:absolute after:w-72 after:h-44 after:-translate-x-4 after:translate-y-4 translate-x-2 mb-7`}>

            <div className={`absolute translate-y-4 -translate-x-4 w-[288px] h-[176px] ${img} bg-center bg-cover`}></div>

            </div>


            <div className="grid grid-cols-[1fr,50px] grid-rows-[16px,25px]">
                <h4 className="text-anaranjado text-xs capitalize -translate-x-2  ">{type}</h4>
                <h3 className="text-white text-lg capitalize -translate-x-2 row-start-2 row-end-3 col-start-1">{title}</h3>
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className=" absolute right-[-8px] block w-fit py-2 px-3 rounded-lg text-white bg-anaranjado">Ver Web</a>
            </div>
        </div>
    )
}
