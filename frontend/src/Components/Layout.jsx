import { useState } from 'react'

import { Outlet } from 'react-router-dom'
import { Design, Navbar } from './Navbar'


function Layout() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='h-screen w-full  relative overflow-hidden'> 

      <header>
        <Navbar />
      </header>

      <section className='w-full h-full '>
        {/* <Texts /> */}
        <div className=" my-9  h-full   flex justify-center items-start ">

            <div className=" w-2/8 h-2/3 flex items-center justify-center">
                <h1 className="text-center text-[140px] execlFonts">Code</h1>
            </div>
        <Outlet />

            <div className="mx-[50px] w-2/8 h-2/3 flex items-center justify-center">
                <h1 className="text-center text-[140px]  execlFonts ">Arena</h1>
            </div>
            

            
        </div>
      </section>


      <footer>

      <Design className={"-z-10"}/>
      <Design className={"-z-10 bottom-5 opacity-[0.5]"} />
      </footer>

     </div>
    </>
  )
}

export default Layout
