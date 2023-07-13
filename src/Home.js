import React, {useState } from 'react';
import './Home.css';
import Login from './Login';
import Signup from './Signup';
import './Login.css';


const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h1>Admin Page</h1>
      {isLogin ? <Login /> : <Signup />}
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Signup' : 'Login'}
        </button>
      </p>

        <div className='containerhome'>
        <a href="/admin">Admin</a>
        <a href="/user">User</a>
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