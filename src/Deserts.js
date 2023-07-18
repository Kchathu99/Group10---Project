import React from "react";
import "./Deserts.css";
import { useState } from "react";

function Deserts() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  return (
    <div>
      <div className="cover-page-reservation">
        <div className="heading-reservation">
          <h1>Reservation</h1>
        </div>
        <div className="ab">
          <div className="bodycontainerreservation">
            <div className="reservation-items">
              <div className="text-box-reservation">
                <label for="canteen">Choose Canteen : </label>
                <select id="canteen" name="canteen">
                  <option value="godacanteen">Goda Canteen</option>
                  <option value="walacanteen">Wala Canteen</option>
                </select>
                <br />
                <br />
                <label for="category">Choose Category : </label>
                <select id="canteen" name="canteen">
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
                <br />
                <br />
                <label for="food">Choose Food Name : </label>
                <select id="food" name="canteen">
                  <option value="rice">Rice</option>
                  <option value="milkrice">Milk Rice</option>
                  <option value="noodles">Noodles</option>
                  <option value="bread">Bread</option>
                  <option value="those">Those</option>
                  <option value="parata">Parata</option>
                  <option value="rice&curry-chicken">
                    Rice & Curry(Chicken)
                  </option>
                  <option value="rice&curry-egg">Rice & Curry(Egg)</option>
                  <option value="rice&curry-fish">Rice & Curry(Fish)</option>
                  <option value="rice&curry-sausage">
                    Rice & Curry(Sausage)
                  </option>
                 {/*} <option value="chickenrice"> Rice & Curry(Chicken)</option>
                  <option value="fishrice">Rice & Curry(Fish)</option>
  <option value="sausagerice">Rice & Curry(Sausage)</option>*/}
                  <option value="kottu">Kottu</option>
                </select>
                
                <p><b>Quantity: {number} &nbsp;</b><button onClick={handleDecrement}>- </button><button onClick={handleIncrement}>+</button></p>
                <div >
                  <button className="buttonres" onclick="res">Reservation</button>
                </div>
               
                  
                  
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Deserts;
