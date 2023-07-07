import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Canteen Management System!</h1>
      <div>
        <a href="/user">User</a>
        <a href="/admin">Admin</a>
      </div>
        <div className='containerhome'>
        <div className="text-box">
        <h3 className="text-box__heading">Food Available times...</h3>
        <p className="text-box__open">Open 5.30am to 11.00pm. <span className="long-space"></span>Breakfast 6.30am to 10.30am</p>
        <p className="text-box__lunch">Lunch 10.45am to 4.30pm.<span className="long-space"></span>Dinner 5.30am to 10.30pm</p>
        </div>
      </div>

    </div>
  );
};

export default Home;