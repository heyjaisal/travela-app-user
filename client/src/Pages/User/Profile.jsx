import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('token'); 
    localStorage.removeItem('user');  

 
    navigate('/login'); 
  };

  return (
    <button className='p-3 m-5 bg-red-600 text-white' onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
