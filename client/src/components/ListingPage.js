// header
// sideBar
// body -- changes according to path
import Header from "./Header";
import Body from "./Body";
import SideBar from "./SideBar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AddNewProperty from "./AddNewProperty";
import PropertyList from "./PropertyList";

// const propertyRouter = createBrowserRouter(
//     [{
//         path : "/",
//         element : <Body/>,
//         children : [{
//             path:"/",
//             element:<PropertyList/>
//         },{
//             path:"/add",
//             element : <AddNewProperty/>
//         }] 
       
//     }]
// )

const ListingPage = ()=>{
    return(
        <div>
            <Header/>
            <SideBar/>
            <Outlet/>
        </div>
    )
}
export default ListingPage;