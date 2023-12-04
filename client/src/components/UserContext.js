import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "default",
    setLoggedInUser : ()=>{},
    signOut : ()=>{}
})

export const extractNameFromEmail = (email) => {
    // Logic to extract the name from the email (e.g., splitting the email string)
    const [username] = email.split('@');
    return username;
};

export const extractIdFromLoggedInUser = (id)=>{
    const userId = id.slice(0,5,undefined)
    return userId;
}
export default  UserContext;