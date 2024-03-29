export default function AboutMe() {
  return (
    <div className="bg-fondo-negro grid place-items-center py-8 md:grid-cols-2 px-6 lg:px-28" id="sobremi">

            <div className=" relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] bg-anaranjado before:absolute before:w-[250px] before:h-[250px] lg:before:w-[350px] lg:before:h-[350px] before:bg-fondo-negro2 before:translate-y-[8px] before:translate-x-[8px] after:absolute after:w-[250px] after:h-[250px] lg:after:w-[350px] lg:after:h-[350px] after:bg-[url('./assets/me.jpg')] after:bg-cover after:bg-bottom after:z-[10] z-[10] after:translate-y-[16px] after:translate-x-[16px] mb-[50px]"></div>

            <div className="max-w-[500px] lg:max-w-[520px] text-center text-white font-light leading-4">
                <p className="mb-2 ">
                    <span className="text-anaranjado text-H6-med">Hola!</span> me llamo Alejo y me dedico a crear <span className=" text-anaranjado">Landing Pages</span> para empresas y emprendimientos.
                </p>
                <p className="mb-2">
                Mi objetivo con las Landing Pages es poder generar <span className="text-anaranjado">conversiones.</span> En otras palabras... hacer que tus visitas se conviertan en una <span className="text-anaranjado">oportunidad de negocio.</span>
                </p>
                <p className="mb-4">
                    Trabajo con desarrollo web <span className="text-anaranjado">100% a medida</span> y adaptable a todo tipo de resoluciones y dispositivos.
                </p>

                <h2 className="text-anaranjado text-H5-semiBold mb-4">¿Qué esperas para tener tu Landing Page?</h2>

                <a 
                    className="block bg-anaranjado w-fit py-4 px-5 border-2 m-auto font-bold"
                    href="#contacto">
                        Quiero mi Landing Page!
                </a>
                
            </div>

    </div>
  )
}
