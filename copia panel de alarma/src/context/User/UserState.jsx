import axios from 'axios'
import React, { useState } from 'react'
import UserContext from './UserContext'
import { URL } from '../../env';





const UserState = ({children}) => {
  
    const [user, setUser] = useState({})
    
    const token = localStorage.getItem( 'token' )



    const postUser = async (email, password) => {
        
      try {
            
          const loginUrl = `${URL}/auth/login` 
          let response = await axios.post(loginUrl,{
              email,
              password
            },{
            headers: {
                'Authorization':`Basic ${token}`
            }
            })

            const { access_token } = response.data;
            localStorage.setItem( 'token', access_token )
             

            return response;
             
            
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
       <UserContext.Provider value={{user,postUser, getUser}}>
            {children}
       </UserContext.Provider> 
  )
}

export default UserState