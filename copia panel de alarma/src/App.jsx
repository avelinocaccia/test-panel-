import './App.css'
import { Routes, Route} from 'react-router-dom'
import  {LoginPage}  from './pages/LoginPage'

import Ejemplo from './pages/Ejemplo'
import { useContext } from 'react'
import UserContext from './context/User/UserContext'


function App() {
  
  const {status} = useContext(UserContext)
  console.log('ME EJECUTO DESDE EL COMPONENTE APP',status)

  return (
        
    <> 
      
        <Routes>
          <Route exact path='/' element={<LoginPage />}/>
          <Route exact path='/ejemplo' element={<Ejemplo />}/> 
        </Routes>
      
    </>

        
      
  )
}

export default App
