// import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
// import UserContext from "../context/User/UserContext"



export const PrivateRutes = () => {

    // const {status} = useContext(UserContext);
    // const location = useLocation();

  return (
        localStorage.getItem('token')
        ? <Outlet />
        : <Navigate to='/login'/>
    )
}
