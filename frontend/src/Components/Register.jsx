import { useContext } from "react"
import { FaInstagram,FaGit,FaTwitter } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { UserData } from "../Context/Context"

export const Register = () => {

    const navigate = useNavigate("")
    const {SetUSer} = useContext(UserData)
    

    const HandleNavigateLogin = () => {
            navigate("/login")
    }
    return(
        <>
        

            <div className="flex flex-col h-2/3 w-2/8  p-2 py-4 shadow-2xl   rounded-xl bg-linear-to-b from-blue-400
             to-white to-50% ">

          

                <h1 className="h-1/4 my-4 text-white text-center text-3xl font-bold mx-3 cursor-pointer">Register</h1>

                <div className="h-2/4 my-4  w-full flex flex-col items-center  justify-center">
                    <input placeholder="Username" className="w-2/3 px-5 py-1 outline-none my-4 rounded bg-white" type="text" />
                    <input placeholder="Email@gmail.com" className="w-2/3 px-5 py-1 outline-none my-4 rounded bg-white" type="email" />
                    {/* <input placeholder="email" className="w-2/3 px-5 py-1 outline-none my-4 rounded bg-blue-400/50" type="email"  />  */}
                    <input placeholder="Password" className="w-2/3 px-5 py-1 outline-none my-4 rounded bg-blue-400/50" type="password"  /> 
                    <input placeholder="Confirm Password" className="w-2/3 px-5 py-1 outline-none my-4 rounded bg-blue-400/50" type="password"  /> 

                </div>
                <div className=" flex justify-center items-center">

                    <button onClick={()=>{SetUSer("anand")}} className="w-fit px-2 py-2 mx-2 my-2 rounded bg-blue-400">Register</button>
                    <button onClick={HandleNavigateLogin} className="w-fit px-2 py-2 mx-2 my-2 rounded bg-blue-400">Go to Login</button>
                </div>

                <div className="flex justify-center items-center my-3 ">

                    <FaInstagram className="mx-1 cursor-pointer text-3xl"/>
                    <FaTwitter className="mx-1 cursor-pointer text-3xl"/>
                    <FaGit className="mx-1 cursor-pointer text-3xl"/>
                </div>
            </div>
            
          
        </>
    )
} 