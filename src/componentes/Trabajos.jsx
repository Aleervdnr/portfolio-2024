export default function Trabajos() {
  return (
    <div className="bg-fondo-negro py-4 px-6 lg:px-28">

        <h2 className="relative w-fit text-2xl text-anaranjado uppercase m-auto after:absolute after:w-full after:h-[2px] after:bg-anaranjado after:top-0 after:left-[-10px] before:absolute before:w-full before:h-[2px] before:bg-anaranjado before:bottom-0 before:right-[-10px] mb-6">Trabajos</h2>

        <div className="grid place-content-center gap-8">
            <TrabajoItem img="bg-me" title="Quinta la sabina" type="landing page"/>
            <TrabajoItem/>
            <TrabajoItem/>

        </div>
    </div>
  )
}

function TrabajoItem({img = "bg-white",title="Title",url,type="type" }){
    return(
        <div>
            <div className={`bg-anaranjado w-60 h-44 before:absolute before:w-60 before:h-44 before:bg-black before:-translate-x-2 before:translate-y-2 after:absolute after:w-60 after:h-44 after:${img} after:-translate-x-4 after:translate-y-4 after:bg-cover after:bg-center translate-x-2 mb-6`}></div>
            <div className="grid grid-cols-[1fr,50px] grid-rows-[16px,25px]">
                <h4 className="text-anaranjado text-xs capitalize -translate-x-2 row-start-2 row-end-3 col-start-1 ">{type}</h4>
                <h3 className="text-white text-xl capitalize -translate-x-2">{title}</h3>
                <a href="#" className="block w-fit py-2 px-3 rounded-lg text-white bg-anaranjado">Ver Web</a>
            </div>
        </div>
    )
}
