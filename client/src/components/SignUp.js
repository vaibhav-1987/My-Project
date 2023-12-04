import { useState, useRef, useContext } from "react"
import { APP_LOGO } from "../utils/constants";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [isSigninForm, setSigninForm] = useState(true)
    const {loggedInUser ,setLoggedInUser} = useContext(UserContext)
    const navigate = useNavigate();
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null)
    const toggleSignInForm = () => {
        setSigninForm(!isSigninForm)
        setErrorMessage(null)
        emailRef.current.value = '';
        passwordRef.current.value = '';
    }
    const handleFormData = async () => {
        // sign-up logic
        if (!isSigninForm) {
            const email = emailRef.current.value
            const password = passwordRef.current.value
            const confirmpassword = confirmPasswordRef.current.value
            if (!email || !password || !confirmpassword) { return }
            try {

                const requestOptions = {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password, confirmpassword }),
                    redirect: 'follow'
                };

                const res = await fetch("http://localhost:5050/api/v1/users/register", requestOptions)
                const data = await res.json();
                setErrorMessage(data)
                console.log("server response", data)
                if (data.message.includes("success")) {
                    emailRef.current.value = '';
                    passwordRef.current.value = '';
                    confirmPasswordRef.current.value = '';
                    // navigate("/")
                    // setUserName("gowri")
                    // console.log(loggedInUser)
                }
            } catch (err) {
                console.log("error", err)
            }
        }
        // sign-in logic
        if (isSigninForm) {
            const email = emailRef.current.value
            const password = passwordRef.current.value
            if (!email || !password) { return }
            try {

                const requestOptions = {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                    redirect: 'follow'
                };

                const res = await fetch("http://localhost:5050/api/v1/users/login", requestOptions)
                const data = await res.json();
                setErrorMessage(data)
                // console.log(data)
                if (data.message.includes("success")) {
                    emailRef.current.value = '';
                    passwordRef.current.value = '';
                    
                    const userData = {
                        email : data?.user?.email,
                        id : data?.user?._id,
                        token : data?.token
                    }
                    console.log(userData)
                    setLoggedInUser(userData)
                    navigate("/")
                    // console.log(loggedInUser)
                }
                
            } catch (err) {
                console.log("error", err)
            }

        }
    }
    return (
        <div>
            <div className="absolute w-screen h-full  bg-teal-100 bg-opacity-80"></div>
            <div className="flex justify-center">
                <form
                    className="absolute flex flex-col mt-[130px] 
                            bg-white  w-4/12 border-white rounded-lg "
                    onSubmit={(e) => e.preventDefault()}
                >
                    <img
                        src={APP_LOGO}
                        alt="app-logo"
                        className="w-40 h-40 mx-auto mt-3"
                    />
                    {isSigninForm
                        ? <p className="text-center text-sm p-3 "
                        >Enter your credentials to access your account</p>
                        : <p className="text-center text-sm p-3 ">Create a New Account</p>
                    }
                    <input
                        className="mx-6 mb-3 mt-5 rounded-md p-3  border border-gray-200 "
                        type="text"
                        placeholder="Email ID"
                        ref={emailRef}
                        required
                    />
                    <input
                        className="mx-6 my-3 p-3 rounded-md border border-gray-200"
                        type="text"
                        placeholder="password"
                        ref={passwordRef}
                        required
                    />
                    {!isSigninForm && <input
                        className="mx-6 my-3 p-3 rounded-md border border-gray-200"
                        type="password"
                        placeholder="confirm password"
                        ref={confirmPasswordRef}
                    />}
                    {!errorMessage ? "" 
                     : ( errorMessage?.status === "success"
                        ? <p className="text-green-600 p-2 text-center ">{errorMessage.message}</p>
                        : <p className="text-orange-600 p-2 text-center ">{errorMessage.message}</p>
                      )
                    }
                    <button
                        className="mx-6 mt-8 mb-12 p-3 bg-blue-600
                        border border-gray-300 text-white rounded-md"
                        onClick={handleFormData}
                    >
                        {isSigninForm ? "SignIn" : "SignUp"}
                    </button>
                    {isSigninForm &&
                        <button
                            onClick={toggleSignInForm}
                            className="text-blue-600 mb-7">
                            SignUp
                        </button>}

                </form>
            </div>
            {isSigninForm
                ? <div className=" absolute mt-[750px]  ml-[650px]">
                    <span className="text-sm">don't you have an account?
                        <button
                            className="text-blue-700 text-lg"
                            onClick={toggleSignInForm}
                        > SignUp</button></span>
                </div>
                : <div className=" absolute mt-[750px]  ml-[650px]">
                    <span className="text-sm">already have an account?
                        <button
                            className="text-blue-700 text-lg"
                            onClick={toggleSignInForm}
                        > Sign in</button></span>
                </div>
            }
        </div>
    )
}

export default SignUp;