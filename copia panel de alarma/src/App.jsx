import './App.css'
import { Routes, Route} from 'react-router-dom'
import  {LoginPage}  from './pages/LoginPage'
import Layout from './pages/layout'
import UserState from './context/User/UserState'


function App() {

  return (
        
        <> 
        <UserState>
          <Routes>
           

              <Route  path='/login' element={<LoginPage />}/>
              <Route  path='layout' element={<Layout />}/>
            
          </Routes>
          </UserState>
        </>

        
      
  )
}

export default App
