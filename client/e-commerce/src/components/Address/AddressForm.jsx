import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddressForm.css";

function AddressForm() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [pin, setPin] = useState("");
  const [add, setAdd] = useState("");
  const [street, setStreet] = useState("");

  const handleCheckout = (e) => {
    e.preventDefault();
    const addressData = {
      name,
      num,
      pin,
      add,
      street,
    };

    localStorage.setItem("addressData", JSON.stringify(addressData));

    setAdd("");
    setName("");
    setNum("");
    setPin("");
    setStreet("");
  };

  return (
    <div className="form-container">
      <h2>Add Delivery Address</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Deliver to</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile No</label>
          <input
            type="tel"
            id="mobile"
            placeholder="Mobile Number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            required
          />
          <small>For all delivery-related communication.</small>
        </div>

        <div className="form-group">
          <label htmlFor="pin">Pin Code</label>
          <input
            type="text"
            id="pin"
            placeholder="Pin Code"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">House No and Building</label>
          <input
            type="text"
            id="address"
            placeholder="House No and Building"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="street">Street No</label>
          <input
            type="text"
            id="street"
            placeholder="Street No"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>

        <Link to="/payment">
          <button type="submit" className="btn" onClick={handleCheckout}>
            Continue to Payment
          </button>
        </Link>
      </form>
    </div>
  );
}

export default AddressForm;
