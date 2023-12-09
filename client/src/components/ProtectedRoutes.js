import { Navigate } from "react-router-dom"
import HomePage from "./HomePage"
import { useContext } from "react"
import UserContext from "./UserContext"

const ProtectedRoutes = () => {
    const { loggedInUser } = useContext(UserContext)
    
    return loggedInUser ? <HomePage /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;