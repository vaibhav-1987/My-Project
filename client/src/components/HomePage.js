
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet} from "react-router-dom";




const HomePage = ()=>{
    return(
        <div className="">
            <Header/>
            <SideBar/>
            <Outlet/>
        </div>
    )
}
export default HomePage;















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