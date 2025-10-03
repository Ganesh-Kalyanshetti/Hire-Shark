import { createContext, useContext, useEffect, useState } from "react"
import { Register } from "../Components/Register"
import { Navigate, Outlet, useLocation, useNavigation } from "react-router-dom"
import { useParams,useNavigate } from "react-router-dom"
import Layout from "../Components/Layout"
import { Login } from "../Components/Login"
import Dashboard from "../Components/Dashboard"

export const UserData = createContext({})



export default function PrivateRoute () {

    const { User,SetUSer } = useContext(UserData)
    const path = useLocation()
    const navigate = useNavigate("")

    if(!User){
        
        return <Navigate to="/login" replace/>
    }

    // if(path.pathname == "" || path.pathname == "/login"){
    //     navigate("/dash")
    // }else{
    //     navigate(path.pathname)
    // }
    return <Outlet />
    
}


export const UserDataProvider = ({children}) => {




    const [User,SetUSer] = useState("")
    
 
    
    
    useEffect(() => {

        let name = localStorage.getItem("ch_name")
        SetUSer(name)
    },[])

    console.log(User);
    

    return ( 
        <>
            <UserData.Provider value={{User,SetUSer}}>
                {
                   children
                }
            </UserData.Provider>
        </>
    )
}

