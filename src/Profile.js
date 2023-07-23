import React from "react";
import "./Propile.css";

function Profile() {
  return (
    <div className="cover-propile">
      <div className="heading-propile">
        <h1>Profile</h1>
      </div>
      <div className="bodycontainerpropile">
        <div className="text-box-propile1">
          <label for="index">Index Number:</label>
          <input type="text" id="number1" name="Textbox1" />
          <br />
          <br />

          <label for="name">Name:</label>
          <input type="text" id="name1" name="Textbox2" />
          <br />
          <br />

          

          <label for="email">Email:</label>
          <input type="email" id="email" name="Textbox4" />
          <br />
          <br />

          <label for="pswrd">Password:</label>
          <input type="password" id="passsword" name="Textbox5" />
          <br />
          <br />
        </div>
        </div>
        
        <div className="bodycontainerorder">
        <div className="text-box-order-history">
          <div className="heading-order">
            <h2>Order History</h2>
          </div>
          <table className="order-table">
  <tr className="row1">
    <th>Food Name</th>
    <th>Price</th> 
    <th>Date</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Roles</td>
    <td>Rs.60.00</td>
    <td>23/07/2023</td>
    <td>Pending</td>
  </tr>
  <tr>
  <td>Rice & Curry(Chicken)</td>
    <td>Rs.130.00</td>
    <td>23/06/2023</td>
    <td>Done</td>
    
  </tr>
  <tr>
  <td>Kottu</td>
    <td>Rs.150.00</td>
    <td>20/06/2023</td>
    <td>Closed</td>
  </tr>
</table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
