import React, { useEffect } from 'react'
import { useContext } from 'react';
import UserContext from '../context/User/UserContext';


const Ejemplo = () => {
    
    const {user, getUser} = useContext(UserContext)
    console.log({user});
   
  
       
  
        
  
    return (
      <>
      
        <h1>{user.name}</h1>

        <button onClick={() => getUser()}>
            ver
        </button>
      
      </>
      )
}

export default Ejemplo