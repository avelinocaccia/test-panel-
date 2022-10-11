import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import UserState from './context/User/UserState'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserState>
  </React.StrictMode>
)
