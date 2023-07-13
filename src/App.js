import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import Nav from './Nav';
import Menu from './Menu';
import Drinks from './Drinks';
import Shorties from './Shorties';
import Deserts from './Deserts';
import Profile from './Profile';
import Logout from './Logout';
import Signup from './Signup';
import Login from './Login';
import User from './User';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          {loggedIn ? (
            <Route path="/user" element={<User />} />
          ) : (
            <Route path="/user" element={<Signup />} />
          )}
          <Route path="/nav" element={<Nav />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/shorties" element={<Shorties />} />
          <Route path="/deserts" element={<Deserts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
