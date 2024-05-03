import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
  
  const {logOut} = useContext(AuthContext)

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogout = () => {
    logOut().then(()=>{
      alert('Logged out');
      navigate(from, {replace: true});
    }).catch(err => {
      console.error(err)
    });
  }


  return (
    <div className='h-screen bg-100 flex items-center justify-center'>
      <button onClick={handleLogout} className='bg-red-700 px-4 py-2 text-white rounded'>
        Sign Out
      </button>
    </div>
  )
}

export default Logout