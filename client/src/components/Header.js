import { useContext, useState } from 'react';
import UserContext, {
  extractNameFromEmail,
  extractIdFromLoggedInUser
}
  from './UserContext';


const Header = () => {
  const { loggedInUser, signOut } = useContext(UserContext);

  const handleSignOut = () => {
    signOut();
  };


  let username = 'default';
  let userId = 12345;
  if (loggedInUser && loggedInUser.email) {
    username = extractNameFromEmail(loggedInUser.email);
    userId = extractIdFromLoggedInUser(loggedInUser.id)
  }
  return (
    <div
      className="absolute z-10 w-[79%] ml-[21%] h-[12%] bg-gray-50 bg-opacity-70
        border border-b-teal-100"
    >
      <div className="flex justify-between mt-[40px] mb-[40px]">
        <p className="px-5"> USER ID : {userId}</p>
        {loggedInUser ? (
          <div>
            <span className="mr-2"> 👨‍💼</span>
            <span className="pr-4 text-xl">{username}</span>
            <button className='text-sm pr-4' onClick={handleSignOut}>SignOut</button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Header