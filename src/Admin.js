import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';
import Login from './Login';
import Signup from './Signup';
import './Login.css';

const Admin = () => {
  const { foodItems, addFoodItem } = useContext(AppContext);
  const [isLogin, setIsLogin] = useState(true);

  const handleAddFoodItem = () => {
    const newFoodItem = {
      id: foodItems.length + 1,
      name: 'New Food Item',
    };
    addFoodItem(newFoodItem);
  };

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
      <button onClick={handleAddFoodItem}>Add Food Item</button>
      {/* Display and manage food items */}
      <ul>
        {foodItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;

