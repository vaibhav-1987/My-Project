import AddNewProperty from './components/AddNewProperty';
import ListingPage from './components/ListingPage';
import SignUp from './components/SignUp';
import Body from './components/Body';
import ProtectedRoutes from './components/ProtectedRoutes';
import {BrowserRouter as Router ,Routes,Route}from 'react-router-dom';
import PropertyList from './components/PropertyList';
import UserContext from './components/UserContext';
import { useEffect, useState } from 'react';



const App = () => {
  const [userName , setUserName]= useState()
  return (
    <UserContext.Provider value={{loggedInUser: userName , setUserName}}>
    <div className=' bg-gray-100 bg-opacity-90 h-screen'>
      <Router>
        <Routes>
            <Route path='/' exact
             element={<ProtectedRoutes><ListingPage/></ProtectedRoutes>}>
              <Route element ={<Body/>} path='/' exact/>
              <Route element ={<AddNewProperty/>} path='/add' />
            </Route>
            <Route path='/login' element={<SignUp/>}></Route>
        </Routes>
      </Router>
    </div>
  </UserContext.Provider>
  )
}
export default App;

// const appRouter = createBrowserRouter([
//     {
//       path: "/login",
//       element: <SignUp />
//     },
//     {
//       path: "/list",
//       element: <ListingPage />,
//       children :[{
//         path : "/list",
//         element : <Body/>
//       },{
//         path:"/list/add",
//         element : <AddNewProperty/>
//       }]
//     }
// ])
// function App() {
//   return (
//     <div >
//      <RouterProvider router={appRouter}/>
//     </div>
//   );
// }

// export default App;
