import { useRef, useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { UseForm } from './useForm';
import ButtonEmail from './ButtonEmail';

export const ContactUs = () => {
  const form = useRef();

  const [isClicked, setIsClicked] = useState(false)

  const initialForm = {
    user_name: "",
    user_email: "",
    message:""
  }

  const {formState,setFormState, onInputChange} = UseForm(initialForm)

  const {user_name, user_email, message} = formState

  const sendEmail = (e) => {
    e.preventDefault();

    setIsClicked(true)
    
    setTimeout(() => {
      setIsClicked(false)
    }, 10000);

   emailjs.sendForm('service_r4h4g33', 'template_9ta6rwl', form.current, 'ilpLRDgBqmSbpG_Lb')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });

    setFormState({
      user_name: "",
      user_email: "",
      message:""
    })
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="w-72 lg:w-[450px] flex flex-col gap-3 text-white">
      <input
        required
        type="text" 
        name="user_name" 
        placeholder='Nombre'
        value={user_name}
        onChange={onInputChange}
        className="bg-[#161616] border-b-[1px] border-[#222] p-2 focus:outline-none focus:border-anaranjado " />

      <input
        required 
        type="email" 
        name="user_email" 
        placeholder='Email'
        value={user_email} 
        onChange={onInputChange}
        className="bg-[#161616] border-[1px] border-[#222] p-2 focus:outline-none focus:border-anaranjado"/>
      
      <textarea
        name="message" 
        placeholder='Mensaje (Opcional)'
        value={message}
        onChange={onInputChange}
        className="bg-[#161616] border-[1px] border-[#222] p-2 focus:outline-none focus:border-anaranjado overflow-auto"/>

        <ButtonEmail isClicked={isClicked} setIsClicked={setIsClicked} />
    </form>
  );
};