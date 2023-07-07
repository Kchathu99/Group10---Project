import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';
{/*import logoImage from './images/icon_2.png';*/}

const Nav = () => {
  return (
    <div>
        <nav>
        <ul className="navbar">
          <li className="navbar__item"><Link to="/menu">Menu</Link></li>
          <li className="navbar__item"><Link to="/drinks">Drinks</Link></li>
          <li className="navbar__item"><Link to="/shorties">Shorties</Link></li>
          <li className="navbar__item"><Link to="/deserts">Deserts</Link></li>
          {/*<li className="navbar__item"><Link to="/login">Login</Link></li>
          <li className="navbar__item"><Link to="/profile">Profile</Link></li>
  <li className="navbar__item"><Link to="/logout"><img src={logoImage} alt="Logo" className="navbar__logo" /></Link></li>*/}
        </ul>
      </nav>

    </div>
  )
}

export default Nav