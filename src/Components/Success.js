import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS-Files/SuccessCancel.css';

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-content">
        <i className="fas fa-beat fa-check-circle success-icon"></i>
        <h1>Payment Successful!</h1>
        <p>Your order has been placed successfully.</p>
        <p>You will receive an email confirmation shortly.</p>
        <Link to="/products">
          <button className="continue-shopping">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;