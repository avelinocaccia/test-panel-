import React, { useEffect } from 'react'
import { useContext } from 'react'
import UserContext from '../context/User/UserContext'

const Layout = () => {

  const {getUser,user} = useContext(UserContext)
  
  console.log({pruebauser: user});
  
// useEffect(() => {
//   getUser()
// }, [])

     

      

  return (
    <>
    
        <h1>
         pag nfjegfrdsgdrsgrda
        </h1>
    
    </>
  )
}

export default Layout