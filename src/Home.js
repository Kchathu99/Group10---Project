import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import './navHome.css';
import './navHome.css';
import logo from './images/Group 1.png';

console.log(logo);
const Home = () => {
  return (

    <div>
        <nav>
        <ul className="navbar1">
            <li className="navbar__item"><Link to="/">Home</Link></li>
          <li className="navbar__item"><Link to="/menu">Menu</Link></li>
          <li className="navbar__item"><Link to="/drinks">Drinks</Link></li>
         <li className="navbar__item"><Link to="/shorties">Shorties</Link></li>
          <li className="navbar__item"><Link to="/desert">Reservation</Link></li>
          <li className="navbar__item"><Link to="/login">Login</Link></li>
        </ul>
      </nav>

        <div className='containerhome'>
        <img src={logo} alt='Logo' className="logo"/>
        <div className="text-box">
        <h3 className="text-box__heading">Food Available times...</h3>
        <p className="text-box__open">Breakfast 6.30am to 10.30am. <span className="long-space"></span>Dinner 5.30pm to 10.30pm</p>
        <p className="text-box__lunch">Lunch 10.45am to 4.30pm.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shorties & Drinks 6.30am to 10.30pm.</p>
        </div>
        </div>
      </div>

  
  )
}

export default Home