import User_Img from "../assets/User_Img.svg"
import {FaInstagram,FaTwitter,FaGit} from "react-icons/fa"



export const Navbar = () => {
    return(
        <>

            <div className="p-4 bg-[#273036] flex justify-between">   
                <div>

                <h1 className="text-white text-3xl font-extrabold">&lt; / &gt;</h1>
                </div>

                <div className="flex justify-center items-center">
                    <h1 className="text-white text-md font-bold mx-3 cursor-pointer">Username</h1>
                    <img className="w-[40px] hover:cursor-pointer" src={User_Img} alt="" />
                </div>
                
            </div>

        </>
    )
}

export const Design = ({className}) => {
        return (
            <>

            

    <div className={` w-full absolute bottom-0 ${className}`}> 

      <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L24,122.7C48,117,96,107,144,106.7C192,107,240,117,288,133.3C336,149,384,171,432,160C480,149,528,107,576,101.3C624,96,672,128,720,160C768,192,816,224,864,208C912,192,960,128,1008,106.7C1056,85,1104,107,1152,133.3C1200,160,1248,192,1296,208C1344,224,1392,224,1416,224L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>

      </div>

            </>
        )
}






export const Texts = () => {
    return(
        <>

            <div className="-z-10 -my-[130px] absolute h-full w-full flex justify-center items-center ">   

            <h1 className="text-[100px]">CodeArena</h1>

            </div>

        </>
    )
}