import React, { useEffect } from 'react'
import axios from 'axios'

import { useForm } from '../hooks/useForm';
import UserState from '../context/User/UserState';
import { useContext } from 'react';
import UserContext from '../context/User/UserContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';







export const LoginPage = () => {

  const {postUser} = useContext(UserContext)
  // const [IsLogged, setIsLogged] = useState(false)
  // console.log('ME EJECUTO DESDE EL COMPONENTE LOGIN',status);
  const navigate = useNavigate()
  
  
  

  const { formState, onInputChange} = useForm({
    email: '',
    password: ''
  })
 
  const {email, password } = formState;
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await postUser(email, password)
    res.status
    if(res.status === 200){
    
      navigate('/ejemplo')
    }
   

  }
  

  // useEffect(() => {
  //   
  // }, [handleSubmit])
  


  

  

  return (
  
        

          <form onSubmit={ handleSubmit } className='flex flex-col justify-center items-center '>
                <div className="mb-6 ">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-black-900 dark:text-black-300">email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={ email } 
                    onChange={ onInputChange }
                    className="text-sm text-gray-base w-full 
                    mr-3 py-5 px-4 h-2 border 
                    border-gray-200 rounded mb-2" required="" 
                  
                  
                  />
                  
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-black-900 dark:text-black-300">password</label>
                  <input 
                    type="password" 
                    name="password" 
                    value={ password }
                    onChange={ onInputChange }
                    className="text-sm text-gray-base w-full 
                    mr-3 py-5 px-5 h-2 border 
                    border-gray-200 rounded mb-2" 
                    required=""

                  />
                </div>
                <div className="flex items-start mb-6">
                
                  
                </div>
                <button

                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-3/12 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                >
                 login
                </button>
        
              </form>
        
             







       
         
    
    
  
  )
}