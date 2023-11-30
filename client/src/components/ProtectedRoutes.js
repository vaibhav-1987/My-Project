import { Outlet,Navigate } from "react-router-dom"
import ListingPage from "./ListingPage"
import { useContext } from "react"
import UserContext from "./UserContext"

const ProtectedRoutes = () => {
    const {loggedInUser} = useContext(UserContext)
    console.log(loggedInUser)
    // let auth = {"token" : false}
  return (
    (loggedInUser==="gowri") ?<ListingPage/> : <Navigate to="/login"/>
  )
}

export default ProtectedRoutes