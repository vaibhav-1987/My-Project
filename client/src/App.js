import AddNewProperty from './components/AddNewProperty';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Body from './components/Body';
import ProtectedRoutes from './components/ProtectedRoutes';
import {BrowserRouter as Router ,Routes,Route}from 'react-router-dom';
import UserContext from './components/UserContext';
import {  useState } from 'react';




const App = () => {
  const [loggedInUser , setLoggedInUser]= useState(null)
  const signOut = ()=>{
    setLoggedInUser(null)
  }
  return (
    <UserContext.Provider value={{loggedInUser,setLoggedInUser , signOut}}>
    <div className=' bg-gray-100 -z-20 bg-opacity-90 h-screen'>
      <Router>
        <Routes>
            <Route path='/' exact
             element={<ProtectedRoutes><HomePage/></ProtectedRoutes>}>
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


