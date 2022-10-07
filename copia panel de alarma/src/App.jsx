import './App.css'
import { Routes, Route} from 'react-router-dom'
import  {LoginPage}  from './pages/LoginPage'

import UserState from './context/User/UserState'
import Ejemplo from './pages/Ejemplo'


function App() {

  return (
        
        <> 
        <UserState>
          <Routes>
           

              <Route exact path='/login' element={<LoginPage />}/>
              <Route exact path='/ejemplo' element={<Ejemplo />}/>
            
          </Routes>
          </UserState>
        </>

        
      
  )
}

export default App
