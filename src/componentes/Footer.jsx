import { ContactUs } from "./emailForm/ContactUs";

export default function Footer() {
  return (
    <div className="bg-fondo-negro grid place-content-center py-4 text-center" id="contacto">
        <h2 className="text-H5-med text-white pb-4">Trabajemos Juntos!</h2>
        <ContactUs/>
    </div>
  )
}
