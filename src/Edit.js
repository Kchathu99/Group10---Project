import React, { useState } from 'react';

const Edit = () => {
  const [menu, setMenu] = useState('');
  const [deserts, setDeserts] = useState('');
  const [drinks, setDrinks] = useState('');
  const [shorties, setShorties] = useState('');

  const handleMenuChange = () => {
    // Update menu content
  };

  const handleDesertsChange = () => {
    // Update deserts content
  };

  const handleDrinksChange = () => {
    // Update drinks content
  };

  const handleShortiesChange = () => {
    // Update shorties content
  };

  const handleSave = () => {
    // Perform save logic
  };

  return (
    <div>
      <h2>Menu Page</h2>
      <div>
        <h3>Menu:</h3>
        <textarea value={menu} onChange={handleMenuChange} />
      </div>
      <div>
        <h3>Deserts:</h3>
        <textarea value={deserts} onChange={handleDesertsChange} />
      </div>
      <div>
        <h3>Drinks:</h3>
        <textarea value={drinks} onChange={handleDrinksChange} />
      </div>
      <div>
        <h3>Shorties:</h3>
        <textarea value={shorties} onChange={handleShortiesChange} />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Edit;
