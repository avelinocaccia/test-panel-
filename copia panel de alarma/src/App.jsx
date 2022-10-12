import './App.css'
import { Routes, Route} from 'react-router-dom'
import  {LoginPage}  from './pages/LoginPage'

import Ejemplo from './pages/Ejemplo'
// import { useContext } from 'react'
// import UserContext from './context/User/UserContext'
import { PrivateRutes } from './componentes/PrivateRutes'


function App() {
  
  // const {status} = useContext(UserContext)
  // console.log('ME EJECUTO DESDE EL COMPONENTE APP',status)

  return (
        
    <> 
      
        <Routes>
            <Route element={ <PrivateRutes />} >
              <Route exact path='/ejemplo' element={<Ejemplo />}/> 
            </Route>
              <Route exact path='/login' element={<LoginPage />}/>
        </Routes>
      
    </>

        
      
  )
}

export default App
