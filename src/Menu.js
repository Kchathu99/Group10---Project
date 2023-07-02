import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [activeTab, setActiveTab] = useState('breakfast'); // Set the initial active tab to 'breakfast'

  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }

  return (
    <div className="vertical-tabs">
      <div className="tab-menu">
        <button
          className={activeTab === 'breakfast' ? 'active' : ''}
          onClick={() => handleTabClick('breakfast')}
        >
          Breakfast
        </button>
        <button
          className={activeTab === 'lunch' ? 'active' : ''}
          onClick={() => handleTabClick('lunch')}
        >
          Lunch
        </button>
        <button
          className={activeTab === 'dinner' ? 'active' : ''}
          onClick={() => handleTabClick('dinner')}
        >
          Dinner
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'breakfast' && (
          <div>
            <h3 className='start'>Breakfast</h3>
            <p className='con'>Content for Breakfast tab</p>
          </div>
        )}
        {activeTab === 'lunch' && (
          <div>
            <h3 className='start'>Lunch</h3>
            <p className='con'>Content for Lunch tab</p>
          </div>
        )}
        {activeTab === 'dinner' && (
          <div>
            <h3 className='start'>Dinner</h3>
            <p className='con'>Content for Dinner tab</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
