import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = (confirmed) => {
    if (confirmed) {
      
      navigate('/login');
    } else {
      
      navigate('/');
    }
  };

  return (
    <div>
    <div className='containerlogout'>
      <h1 className='logout'>Logout</h1>
      <p className='sentence'>Are you sure you want to logout?</p>
      <div className='buttoncon'>
      <button onClick={() => handleLogout(true)} className='buttonlogout'>Yes</button>
      <button onClick={() => handleLogout(false)} className='buttonlogout'>No</button>
    </div>
    </div>
    </div>
  );
};

export default Logout;