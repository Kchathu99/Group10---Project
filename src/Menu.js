import React, { useState } from "react";
import "./Menu.css";

function Menu() {
  const [activeTab, setActiveTab] = useState("breakfast"); // Set the initial active tab to 'breakfast'

  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }

  return (
    <div>
    <div className="heading-menu"><h1>Menu</h1></div>
    <div className="vertical-tabs">
      <div className="tab-menu">
        <button
          className={activeTab === "breakfast" ? "active" : ""}
          onClick={() => handleTabClick("breakfast")}
        >
          Breakfast
        </button>
        <button
          className={activeTab === "lunch" ? "active" : ""}
          onClick={() => handleTabClick("lunch")}
        >
          Lunch
        </button>
        <button
          className={activeTab === "dinner" ? "active" : ""}
          onClick={() => handleTabClick("dinner")}
        >
          Dinner
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "breakfast" && (
          <div>
            <h3 className="start">Goda Canteen</h3>

            <div class="dish-row">
              <input type="checkbox" id="rice" name="dish" value="rice" />
              <label for="rice">
                Rice
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.100.00
              </label>
              <br />
              <br />

              <input
                type="checkbox"
                id="milkrice"
                name="dish"
                value="milkrice"
              />
              <label for="milkrice">
                Milk Rice
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.120.00
              </label>
              <br />
              <br />

              <input type="checkbox" id="noodles" name="dish" value="noodles" />
              <label for="noodles">
                Noodles
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.120.00
              </label>
              <br />
              <br />

              <input type="checkbox" id="bread" name="dish" value="bread" />
              <label for="bread">
                Bread
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.80.00
              </label>
              <br />
              <br />

              <input type="checkbox" id="those" name="dish" value="those" />
              <label for="those">
                Those
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.60.00
              </label>
              <br />
              <br />

              <input type="checkbox" id="parata" name="dish" value="parata" />
              <label for="parata">
                Parata&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.60.00
              </label>
              <br />
            </div>

            <div >
              <button className="button2"onclick="res ()">Reservation</button>
            </div>
            <div className="tab-content-1">
              <div>
                <h3 className="start"> Wala Canteen</h3>
                <div class="dish-row">
                  <input type="checkbox" id="rice" name="dish" value="rice" />
                  <label for="rice">
                    Rice
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.100.00
                  </label>
                  <br />
                  <br />

                  <input
                    type="checkbox"
                    id="stringhoppers"
                    name="dish"
                    value="stringhoppers"
                  />
                  <label for="stringhoppers">
                    String Hoppers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.100.00
                  </label>
                  <br />
                  <br />

                  <input
                    type="checkbox"
                    id="noodles"
                    name="dish"
                    value="noodles"
                  />
                  <label for="noodles">
                    Noodles
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.120.00
                  </label>
                  <br />
                  <br />

                  <input type="checkbox" id="bread" name="dish" value="bread" />
                  <label for="bread">
                    Bread
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.80.00
                  </label>
                  <br />
                  <br />

                  <input type="checkbox" id="those" name="dish" value="those" />
                  <label for="those">
                    Those
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.60.00
                  </label>
                  <br />
                  <br />

                  <input
                    type="checkbox"
                    id="parata"
                    name="dish"
                    value="parata"
                  />
                  <label for="parata">
                    Parata&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.60.00
                  </label>
                  <br />
                </div>

                <div >
                  <button className="button2" onclick="res ()">Reservation</button>
                </div> 
              </div>
            </div>
          </div>
        )}

        {activeTab === "lunch" && (
          <div>
            <h3 className="start">Goda Canteen</h3>
            <p className="con">Rice & Curry</p>

            <div class="dish-row">
              <input type="checkbox" id="chiken" name="dish" value="chiken" />
              <label for="chiken">
                Chicken
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
              </label>
              <br />
              <br />

              <input type="checkbox" id="egg" name="dish" value="egg" />
              <label for="egg">
                Egg
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
              </label>
              <br />
              <br />

              <input type="checkbox" id="fish" name="dish" value="fish" />
              <label for="fish">
                Fish
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
              </label>
              <br />
              <br />

              <input type="checkbox" id="sausage" name="dish" value="sausage" />
              <label for="sausage">
                Sausage
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
              </label>
              <br />
              <br />
            </div>

            <div >
              <button className="button2"onclick="res ()">Reservation</button>
            </div>

            <div className="tab-content-2">
              <div>
                <h3 className="start"> Wala Canteen</h3>
                <p className="con">Rice & Curry</p>

                <div class="dish-row">
                  <input
                    type="checkbox"
                    id="chiken"
                    name="dish"
                    value="chiken"
                  />
                  <label for="chiken">
                    Chicken
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
                  </label>
                  <br />
                  <br />

                  <input type="checkbox" id="egg" name="dish" value="egg" />
                  <label for="egg">
                    Egg
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
                  </label>
                  <br />
                  <br />

                  <input type="checkbox" id="fish" name="dish" value="fish" />
                  <label for="fish">
                    Fish
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
                  </label>
                  <br />
                  <br />

                  <input
                    type="checkbox"
                    id="sausage"
                    name="dish"
                    value="sausage"
                  />
                  <label for="sausage">
                    Sausage
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
                  </label>
                  <br />
                  <br />
                </div>
                <div >
                  <button className="button2" onclick="res ()">Reservation</button>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "dinner" && (
          <div>
            <h3 className="start">Goda Canteen</h3>
            <div class="dish-row">
              <input
                type="checkbox"
                id="R&CChicken"
                name="dish"
                value="R&CChicken"
              />
              <label for="">
              Rice & Curry(Chicken)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
              </label>
              <br />
              <br />

              <input
                type="checkbox"
                id="R&CFish"
                name="dish"
                value="R&CFish"
              />
              <label for="R&CFish">
              Rice & Curry(Fish)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
              </label>
              <br />
              <br />

              <input type="checkbox" id="R&CSausage" name="dish" value="R&CSausage" />
                  <label for="R&CSausage">
                  Rice & Curry(Sausage)
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
                  </label>
                  <br />
                  <br />



              <input type="checkbox" id="kottu" name="dish" value="kottu" />
              <label for="kottu">
                Kottu
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.150.00
              </label>
              <br />
              <br />
            </div>
            <div >
              <button className="button2" onclick="res ()">Reservation</button>
            </div>

            <div className="tab-content-3">
              <div>
                <h3 className="start"> Wala Canteen</h3>
            

                <div class="dish-row">
                  <input
                    type="checkbox"
                    id="R&CChicken"
                    name="dish"
                    value="R&CChicken"
                  />
                  <label for="R&CChicken">
                   Rice & Curry(Chicken)
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
                  </label>
                  <br />
                  <br />

                  <input type="checkbox" id="R&CFish" name="dish" value="R&CFish" />
                  <label for="R&CFish">
                  Rice & Curry(Fish)
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
                  </label>
                  <br />
                  <br />

                  <input type="checkbox" id="R&CSausage" name="dish" value="R&CSausage" />
                  <label for="R&CSausage">
                  Rice & Curry(Sausage)
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.130.00
                  </label>
                  <br />
                  <br />



                  <input type="checkbox" id="kottu" name="dish" value="kottu" />
                  <label for="kottu">
                    Kottu
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.150.00
                  </label>
                  <br />
                  <br />

                </div>
                <div >
                  <button className="button2" onclick="res">Reservation</button>
                </div>
              </div>
            </div>

            

          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Menu;
