import React from 'react'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Layout from './Components/Layout'
import { Login } from './Components/Login'
import { Register } from './Components/Register'
import {  UserDataProvider } from './Context/Context'
import   PrivateRoute  from './Context/Context'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <>

    <UserDataProvider>
    <BrowserRouter>

      <Routes>


        <Route path='/' element={<PrivateRoute />} >
           
            <Route path='dash' element={<Dashboard />} />
        </Route>
       
        <Route path='/login' element={<Layout />} >
            <Route index element={<Login />} />
        </Route> 
        <Route path='/register' element={<Layout />} >
            <Route index element={<Register />} />
        </Route> 
        
 
          

        

        
        

        

        
        

      </Routes>
    
    </BrowserRouter>
    </UserDataProvider>


    </>
  )
}

export default App
