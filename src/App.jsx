import { useState, useEffect } from 'react'
import './App.css'
import Intro from './componentes/intro/Intro'
import Header from './componentes/Header'
import Hero from './componentes/Hero'
import { DividerClose, DividerClose2, DividerOpen, DividerOpen2 } from './componentes/Divider'
import AboutMe from './componentes/AboutMe'
import Landing from './componentes/Landing'
import Trabajos from './componentes/Trabajos'
import Footer from './componentes/Footer'

function App() {
  const [intro, setIntro] = useState(true)

useEffect(() => {
  const timer = setTimeout(() => {
    setIntro(true)
  }, 4000);
  return () => clearTimeout(timer);
}, []);

  return (
    intro?
    <div className="overflow-hidden min-h-screen relative font-poppins">
      <Header items={["sobre mi", "trabajos", "contacto"]} />
      <Hero/>
      <DividerOpen/>
      <AboutMe/>
      <DividerClose/>
      <Landing/>
      <Trabajos/>
      <DividerOpen2/>
      <div className='bg-anaranjado py-4 px-6 lg:px-28 grid gap-4'>
        <p className='text-[28px] leading-9 text-white text-center'>Tener una <span className='font-semibold'>Landing Page</span>, permitirá plasmar todo tu contenido en ella y todo lo que quieras reflejar sobre <span className='font-semibold'>Tu Negocio</span>.</p>
      </div>
      <DividerClose2/>
      <Footer/>
    </div>
    :
    <div className="App">
      <Intro/>
    </div>

  )
}

export default App
