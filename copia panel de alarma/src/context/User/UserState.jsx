import axios from 'axios'
import React, { useState } from 'react'
import UserContext from './UserContext'
import { URL } from '../../env';



const UserState = ({children}) => {
  
    const [user, setUser] = useState({})
    const [status, setStatus] = useState({})

    const token = localStorage.getItem( 'token' )
  


    const postUser = async (email, password) => {
        try {
            
            const loginUrl = `${URL}/auth/login` 
            await axios.post(loginUrl,{
              email,
              password
            },{
            headers: {
                'Authorization':`Basic ${token}`
            }
            }).then( resp => {
            
           console.log(resp);
            
            const { access_token } = resp.data;
            const { status } = resp
            setStatus(status)
            
            
            
            localStorage.setItem( 'token', access_token )
            
            
            
            })
        } catch (error) {
            console.log(error)
        }

    }

    const getUser = async () => {
    
        try {
    
          const resp = await axios.get(`${URL}/auth/me`,
              { headers: 
                {"Authorization" : `Bearer ${token}`}
           });
          
          const {
            name, 
            id, 
            surname,
            email,
            rol,
            codigoparticular
          } = resp.data
          
          setUser({name, id, surname, email, rol, codigoparticular})
         
    
        } catch (error) {
          
          console.log(error); 
    
        }
    }

  
  


  
    return (
       <UserContext.Provider value={{user,postUser, getUser, status }}>
            {children}
       </UserContext.Provider> 
  )
}

export default UserState
