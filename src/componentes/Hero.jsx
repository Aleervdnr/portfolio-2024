export default function Hero() {
  return (
    <div className="relative h-screen w-full grid place-content-center bg-fondo-negro text-center">
        <h1 className="font-theSignature text-[63px] lg:text-9xl text-anaranjado leading-tight animate-fadeIntro">Rivadeneira Alejo</h1>
        <h2 className="text-white  text-lg lg:text-H3-thin">Desarrollador Web</h2>

        <div className="absolute w-full bottom-[100px] flex place-content-center animate-fadeIn">
            <div className="bg-fondo-negro border-r-[1px] border-b-[1px] w-6 h-6 rotate-45"></div>
        </div>
    </div>
  )
}
