import React, { useState } from 'react';
import './Login.css';


const Login = () => {
  const [name, setName] = useState('');
  const [indexNumber, setIndexNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Signing up with name:', name, 'index number:', indexNumber, 'email:', email, 'and password:', password);
      
    } else {
      console.log('Logging in with email:', email, 'and password:', password);
     
    }
   
    setName('');
    setIndexNumber('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='cover-page'>
    <div className="container">
      <h1>{isSignUp ? 'Sign Up' : 'Log In'}</h1>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        {isSignUp && (
          <div className="form-group">
            <label>Index Number:</label>
            <input
              type="text"
              value={indexNumber}
              onChange={(e) => setIndexNumber(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
      </form>
      <p className='loginsignup' onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp
          ? 'Already have an account? Log in'
          : "Don't have an account? Sign up"}
      </p>
    </div>
    </div>
  );
};

export default Login;
