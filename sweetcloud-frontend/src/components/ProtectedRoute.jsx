import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
function ProtectedRoute({children}) {
    const [token, setToken] = useState();

    if(!token){
        return <Navigate to={"/baker/bakerlogin"}/>
    }

     useEffect(()=>{
        setToken(localStorage.getItem("token"));
    })
   
 return children;

 
}

export default ProtectedRoute