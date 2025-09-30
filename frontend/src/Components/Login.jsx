import { useContext, useState } from "react"
import { FaInstagram,FaGit,FaTwitter } from "react-icons/fa"
// import Link from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { UserData } from "../Context/Context"
export const Login = () => {


    const [count,Setcount] = useState(1)
    const navigate = useNavigate("")
    const {SetUSer} = useContext(UserData)

    const [UserForm,SetUserForm] = useState({})
    const [FormError,SetFormError] = useState({})

    const HandleFormData = (e) => {

        const {name,value} = e.target
        console.log(name);
    
        name == "username"  && SetFormError((prev) => ({...prev,[name] : value.length < 3 ? "minimun 4 charter required" : "" })) 
        name == "password"  && SetFormError((prev) => ({...prev,[name] : value.length < 6 ? "minimun 6 charter required" : "" }))

            SetUserForm((prev) => {
                return  {...prev,
                    [name] : value
                }
            })

           
          
    }

    const HandleError = () => {

        SetFormError({})
        if( UserForm.username && UserForm.username.length < 3){
             SetFormError((prev) => ({
                ...prev,
                username : "4 charter minimun"
            }))
        }
        if(UserForm.password && UserForm.password.length < 5){
        SetFormError((prev) => ({
                ...prev,
                password : "6 charter minimun"
            }))  
        }
}
    const HandleCall = () => {

        let hasError = Object.values(FormError).some(val => val)

        console.log(hasError);
        
        if(!hasError){
            console.log("Good for api call");
        }else{
            console.log("Need to solve the errors");
            
        }
    }


    const HandleNavigateRegister = () => {
            navigate("/register")
    }

    return(
        <>
        

            <div className="flex flex-col h-2/3 w-2/8  p-2 shadow-2xl   rounded-xl bg-linear-to-b from-blue-400
             to-white to-50% ">

          

                <h1 className="my-9 text-white text-center text-3xl font-bold mx-3 cursor-pointer">Login</h1>

                <div className="h-2/3  w-full flex flex-col items-center  justify-center">
                    <input onChange={(e) => {HandleFormData(e)}} name="username" placeholder="Username" className="w-2/3 px-5 py-1 outline-none my-4 rounded bg-white" type="text" />
                    {FormError && <p  className="text-red-900">{FormError.username}</p>}
                    <input onChange={(e) => {HandleFormData(e)}} name="password" placeholder="Password" className="w-2/3 px-5 py-1 outline-none my-4 rounded bg-blue-400/50" type="password"  /> 
                    {FormError && <p  className="text-red-900">{FormError.password}</p>}

                    <div className="">

                    <button onClick={HandleCall} className="px-4 py-2 mx-2 my-9 rounded bg-blue-400">Submit</button>
                    <button onClick={HandleNavigateRegister} className="px-4 py-2 mx-2 my-9 rounded bg-blue-400">Register</button>
                    </div>

                    

                    <div className="flex ">

                    <FaInstagram className="mx-1 cursor-pointer text-3xl"/>
                    <FaTwitter className="mx-1 cursor-pointer text-3xl"/>
                    <FaGit className="mx-1 cursor-pointer text-3xl"/>
                    </div>
                </div>
            </div>

          
        </>
    )
} 