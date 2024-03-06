import { useState } from "react"
import { Fade } from "react-awesome-reveal"
import { TypeAnimation } from "react-type-animation"



import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

export function App() {

  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return(
    <div className="mx-auto px-5">
      <div className={`${darkMode && "dark"} min-h-screen`}>
        <Fade cascade damping={0.2} triggerOnce={true}>
        <main className="min-h-screen dark:bg-zinc-900 bg-slate-200 outline-none selection:bg-red-500 overflow-hidden">
          <div className="h-48">
          <Fade direction="down">
            
            <h1 className="absolute left-6 top-6 font-normal celular:text-1xl lg:text-3xl font-Inter text-zinc-900 dark:text-slate-200"><a>PORTI<a className=" celular:text-lg lg:text-4xl font-Pixel text-blue-600  dark:text-indigo-500">FOLIO</a></a></h1>
            
            <div className=" absolute hidden lg:right-6 lg:top-6 ">
              <div className="flex flex-row gap-6 font-normal font-JetBrains">
                
                <h1 className=" text-4xl dark:text-slate-200"><a>SOBRE</a></h1>
                <h1 className=" text-4xl dark:text-slate-200"><a>PROJETOS</a></h1>
                <h1 className=" text-4xl dark:text-slate-200"><a>CONTATO</a></h1>

              </div>
            </div>
          </Fade>
            </div>
            <div>
            
            <Fade direction="down">
              <h2 className=" absolute animate-wiggle left-1/4 font-Pixel font-light lg:top-0 lg:text-3xl text-blue-400 dark:text-indigo-600 ">I am...</h2>
            </Fade>
            <Fade direction="up">
              <h1 className=" celular:relative celular:text-center celular:text-sm lg:left-72 font-JetBrains lg:text-left celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200"><TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          'Desginer',
                          1000, // wait 1s before replacing "Mice" with "Hamsters"
                          'Web Developer',
                          1000,
                          'Music Producer',
                          1000,
                          'Bruno B. Mathias',
                          1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                      />
                      
                      <blockquote className=" dark:text-slate-200 text-xl lg:text-left mt-14">
                        <span className=" bg-zinc-800 p-3 rounded-2xl">
                          "You dont need to make, I do"
                        </span>
                        
                      </blockquote>
                        
                       

                      </h1>
            <div className="flex flex-col translate-x-1/2 -translate-y-3/4 opacity-45">
              <div className=" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200">
                          <div className="flex gap-10">
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                          </div>
              </div> 
              <div className=" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200">
                          <div className="flex gap-10">
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                          </div>
              </div> 
              <div className=" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200">
                          <div className="flex gap-10">
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                                <div className="animate-spining">+</div>
                          </div>
              </div>
                  <div className=" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200">
                              <div className="flex gap-10">
                                    <div className="animate-spining">+</div>
                                    <div className="animate-spining">+</div>
                                    <div className="animate-spining">+</div>
                                    <div className="animate-spining">+</div>
                                    <div className="animate-spining">+</div>
                                    <div className="animate-spining">+</div>
                                    <div className="animate-spining">+</div>
                              </div>
                  </div> 
              </div>

                    
              </Fade>
              </div>

          <div className="dark:bg-zinc-900 bg-slate-300">

          </div>
          <div className="bg-slate-200">

          </div>
        </main>
        </Fade>
        <button onClick={toggleDarkMode} className="absolute w-16 h-16 right-16 bottom-16 p-4 rounded-full font-medium font-Danci dark:bg-slate-200 bg-zinc-900 text-slate-200 dark:text-zinc-950">
            {darkMode ? <Sun className="absolute w-8 h-8 left-4 top-4"/> : <Moon className="absolute w-8 h-8 left-4 top-4"/>}
          </button>
      </div>
        

    </div>
    
  )
}
