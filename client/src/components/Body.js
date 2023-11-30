import { Outlet,Link } from "react-router-dom"
import AddNewProperty from "./AddNewProperty"
import PropertyList from "./PropertyList"
const Body = () => {
  return (
    <div>
        <div>search bar</div>
        <Link to="/add">Add Property</Link>
        <PropertyList/>
    </div>
  )
}

export default Body