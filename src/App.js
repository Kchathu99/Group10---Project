import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Home from './Home';
import Admin from './Admin';
import User from './User';
import Nav from './Nav';
import Menu from './Menu';
import Drinks from './Drinks';
import Shorties from './Shorties';
import Deserts from './Deserts';

{/*import Profile from './Profile';
import Logout from './Logout';
import { Nav } from 'react-bootstrap';*/}

function App() {
  return (
    <div>
      <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User/>}/>
        <Route path="/nav" element={<Nav></Nav>}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/shorties" element={<Shorties />} />
        <Route path="/deserts" element={<Deserts />} />
        {/*<Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />*/}
      </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
