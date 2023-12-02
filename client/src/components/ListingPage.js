
import Header from "./Header";
import Body from "./Body";
import SideBar from "./SideBar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AddNewProperty from "./AddNewProperty";
import PropertyList from "./PropertyList";



const ListingPage = ()=>{
    return(
        <div className=" bg-fixed">
            <Header/>
            <SideBar/>
            <Outlet/>
        </div>
    )
}
export default ListingPage;















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