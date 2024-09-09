import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [addressData, setAddressData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    // Retrieve the address data from localStorage
    const storedAddressData = localStorage.getItem("addressData");
    if (storedAddressData) {
      setAddressData(JSON.parse(storedAddressData));
    }
  }, []);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Here, you would handle the actual payment processing
    setShowSuccessPopup(true);
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      {addressData ? (
        <div className="address-details">
          <h3>Delivery Address:</h3>
          <p>
            <strong>Name:</strong> {addressData.name}
          </p>
          <p>
            <strong>Mobile No:</strong> {addressData.num}
          </p>
          <p>
            <strong>Pin Code:</strong> {addressData.pin}
          </p>
          <p>
            <strong>House No and Building:</strong> {addressData.add}
          </p>
          <p>
            <strong>Street No:</strong> {addressData.street}
          </p>
        </div>
      ) : (
        <p>No address details found.</p>
      )}

      <h3>Choose Payment Method</h3>
      <form onSubmit={handlePaymentSubmit} className="payment-form">
        <div className="form-group">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Card"
              checked={paymentMethod === "Card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Debit/Credit Card
          </label>
        </div>

        {paymentMethod === "UPI" && (
          <div className="form-group">
            <label htmlFor="upiId">Enter UPI ID</label>
            <input type="text" id="upiId" placeholder="example@upi" required />
          </div>
        )}

        {paymentMethod === "Card" && (
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="Card Number"
              required
            />
            <label htmlFor="expiryDate">Expiry Date</label>
            <input type="text" id="expiryDate" placeholder="MM/YY" required />
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="CVV" required />
          </div>
        )}

        <button type="submit" className="btn">
          Complete Payment
        </button>
      </form>

      {showSuccessPopup && (
        <div className="success-popup">
          <p>Payment Successful!</p>
          <Link to="/" className="btn">
            Return to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
