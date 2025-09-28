import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Navbar,Design,Login, Texts} from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='h-screen w-full  relative overflow-hidden'> 

      <header>
        <Navbar />
      </header>

      <section className='w-full h-full '>
        {/* <Texts /> */}
        <Login />

      </section>


      <footer>

      <Design className={"-z-10"}/>
      <Design className={"-z-10 bottom-5 opacity-[0.5]"} />
      </footer>

     </div>
    </>
  )
}

export default App
