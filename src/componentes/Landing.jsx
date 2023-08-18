import mockup from "../assets/mockup.png"
export default function Landing() {
  return (
    <div className="bg-fondo-negro grid grid-cols-1 place-items-center py-8 md:grid-cols-2 px-6 lg:px-28">
  
      <img src={mockup} className="max-w-[300px] md:col-start-2 md:col-end-3 lg:max-w-[350px]" />

      <div className="text-white md:col-start-1 md:col-end-2 md:row-start-1 max-w-[500px]">
        <h2 className="text-3xl text-anaranjado font-bold my-4">Landing Page</h2>
        <p className="my-4 leading-4">Permiten promocionar productos y/o servicios específicos, destacando sus beneficios y ventajas.</p>
        <p className="text-sm font-extralight leading-4">Sirve para presentar una oferta, obtener información de contacto o realizar una acción específica. Es diseñada para ser atractiva y fácil de usar, y su contenido está optimizado para convertir a los visitantes en potenciales clientes.</p>
      </div>

    </div>
  )
}
