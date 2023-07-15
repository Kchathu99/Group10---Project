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
            <h3 className='start'>Goda Canteen</h3>
            <ul>
              <li>Rice<span className="long-space"></span>Rs.100.00</li>
              <li>Noodles</li>
              <li>Paratha</li>
              <li>Milk Rice</li>
              <li>Bread</li>
            </ul>
            
            
              
            

            
           
          </div>
        )}
        {activeTab === 'lunch' && (
          <div>
            <h3 className='start'>Goda Canteen</h3>
            <p className='con'>Rice & Curry</p>
            <form>
              <div class="dish-row">
                  <input type="checkbox" id="chiken" name="dish" value="chiken"> </input>
                  <label for="chiken">Chicken</label>
                </div>

                <div class="dish-row">
                  <input type="checkbox" id="egg" name="dish" value="egg"></input>
                  <label for="egg">egg</label>
                </div>

                <div class="dish-row">
                  <input type="checkbox" id="fish" name="dish" value="fish"></input>
                  <label for="fish">Fish</label>
                </div>

                <div class="dish-row">
                  <input type="checkbox" id="sausage" name="dish" value="sausage"></input>
                  <label for="sausage">Sausage</label>
                </div>
                </form>
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
