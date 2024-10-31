import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css'; // Import Checkout.css

function Checkout() {
  const location = useLocation();
  const totalCartPrice = location.state?.totalCartPrice || 0; // Retrieve the total price from Cart.js
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    setOrderConfirmed(true);
    setTimeout(() => {
      // Navigate to the next page with a success message
      navigate('/nextpage', { state: { message: 'Order is confirmed!' } });
    }, 2000); // Delay of 2 seconds for confirmation
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {orderConfirmed ? (
        <h2 className="confirmation-message">Order is confirmed! Redirecting to Dashboard...</h2>
      ) : (
        <>
          <h2>Total Amount to Pay: ${totalCartPrice.toFixed(2)}</h2>

          <form onSubmit={handlePayment}>
            <label>
              <input
                type="radio"
                value="UPI"
                checked={paymentMethod === 'UPI'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              UPI
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="Credit/Debit Card"
                checked={paymentMethod === 'Credit/Debit Card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit/Debit Card
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery (COD)
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="Net Banking"
                checked={paymentMethod === 'Net Banking'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Net Banking
            </label>
            <br />
            <button type="submit">Confirm Order</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Checkout;
