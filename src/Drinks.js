import React from 'react';
import './Drinks.css';

function Drinks() {
  return (
    <div>
        <h2 className='headingtag'>"Quenching Zone"</h2>
        <h2 className='headingdrinks'>Drinks</h2>

        <div className='bodycontainerdrinks'>

        
            <div className="text-box-drinks">
                <h3 className="text-box__heading__drinks1">Wala(D2-Floor) Canteen</h3>
                <p className="text-box__first__drinks1">NesCafe<span className="long-space"></span>Rs.80.00</p>
                <p className="text-box__second__drinks1">NesTea<span className="long-space"></span>Rs.80.00</p>
             </div>
       

        
            <div className="text-box-drinks">
                <h3 className="text-box__heading__drinks2">Goda(D1-Floor) Canteen</h3>
                <p className="text-box__first__drinks2">NesCafe<span className="long-space"></span>Rs.80.00</p>
                <p className="text-box__second__drinks2">NesTea<span className="long-space"></span>Rs.80.00</p>
             </div>
        
        
    </div>

    </div>
  );
}

export default Drinks;