import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Menu from './Menu';
import Drinks from './Drinks';
import Shorties from './Shorties';
import Deserts from './Deserts';
import Login from './Login';
import Profile from './Profile';
import Logout from './Logout';





function App() {
  return (
    <div>
      <div className='App'>
          <Nav/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/shorties" element={<Shorties />} />
        <Route path="/deserts" element={<Deserts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      
    </div>
  );
}

export default App;
