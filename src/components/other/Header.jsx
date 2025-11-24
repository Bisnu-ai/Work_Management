import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';


function Header(props) {

 
  const [authData] = useContext(AuthContext);

  
  
  

  

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('')
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-white text-2xl font-medium'>
        Hello <br />
        
        

        <span className='text-3xl font-semibold'>Buddy🧑‍💻</span>
      </h1>

      <button
        className='bg-green-500 text-lg font-medium text-white rounded-s-sm px-3 py-2 hover:bg-red-600'
        onClick={logOutUser}
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
