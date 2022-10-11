import React, { useEffect } from 'react'
import { useContext } from 'react';
import UserContext from '../context/User/UserContext';


const Ejemplo = () => {
    
    const {user, getUser,status} = useContext(UserContext)
    console.log({user});

      useEffect(() => {
        if(status === 200){
          getUser()
        }
      }, [])
      
  
      
      
        
  
    return (
      <>
        <h1>{user.name}</h1>
        
      
      </>
      )
}

export default Ejemplo