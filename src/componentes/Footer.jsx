import { ContactUs } from "./emailForm/ContactUs";

export default function Footer() {
  return (
    <div className="bg-fondo-negro grid place-content-center py-4" id="contacto">
        {/* <form className="w-72 lg:w-[450px] flex flex-col gap-3 text-white" onSubmit={(e)=> e.preventDefault()}>
            <input 
                type="text" 
                name="name" 
                id="" 
                placeholder="Nombre"
                className="w-full bg-[#161616] border-b-[1px] border-[#222] p-2 focus:outline-none focus:border-anaranjado autofill:bg-red-600" />

            <input 
                type="email" 
                name="email" 
                id="" 
                placeholder="Email"
                className="bg-[#161616] border-[1px] border-[#222] p-2 focus:outline-none focus:border-anaranjado"/>

            <textarea
                type="text" 
                name="" 
                id="" 
                placeholder="Mensaje"
                className="bg-[#161616] border-[1px] border-[#222] p-2 focus:outline-none focus:border-anaranjado overflow-auto"/>

            <button className="bg-anaranjado text-white w-fit px-3 py-2 self-end ">
              Enviar Mensaje
            </button>
        </form> */}
        <ContactUs/>
    </div>
  )
}
