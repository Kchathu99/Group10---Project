import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import Nav from './Nav';


const UserPage = () => {
  const { foodItems } = useContext(AppContext);

  return (
    <div>
      <h1>User Page</h1>
      <Nav/>
    
      <div>
        <h1>User</h1>
        {/* Display food items handled by the admin */}
        <ul>
          {foodItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
