import { CiPaperplane } from 'react-icons/ci';

export default function ButtonEmail({isClicked}) {

  return (
    <button 
        className="relative overflow-hidden bg-naranja text-sm text-white w-44 px-4 py-3 self-end flex place-items-center pl-12"
    >
        <div className={`absolute left-0  h-full w-full grid place-items-center grid-cols-[1fr,35px] translate-x-[-138px] bg-naranja ${isClicked? `animate-sendEmail` : ``} `}>
            <span className={isClicked ? `animate-fadeInLow`:``}>Mensaje Enviado</span>
            <div className='bg-white rounded-full p-1  '>
                <CiPaperplane className='text-naranja w-6 h-6'/>
            </div>
        </div>
        <span>
            Enviar Mensaje
        </span>
    </button>
  )
}
