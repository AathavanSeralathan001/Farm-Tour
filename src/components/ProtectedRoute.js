import React from 'react'
import { Navigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function ProtectedRoute({children}) {

    let {user} = useAuth();
    if(!user){
       return <Navigate to="/"/>
    }
    else{
        return <Navigate to="/login" />;
    }
    return children;
}

 
//       const {currentUser} = useAuth()
//   return (
//     <Route 
//     {...rest}
//     render = {props=>{
//       return currentUser ? <Component {...props}/> : <Navigate to="/login"/>
//     }}>
      
//     </Route>
//   )
// }
