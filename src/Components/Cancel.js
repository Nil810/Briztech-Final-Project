import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS-Files/SuccessCancel.css';

const Cancel = () => {
  return (
    <div className="cancel-container">
      <div className="cancel-content">
        <i className="fas fa-fade fa-times-circle cancel-icon"></i>
        <h1>Payment Cancelled</h1>
        <p>Your payment was cancelled. No charges were made.</p>
        <div className="button-group">
          <Link to="/cart">
            <button className="return-cart">
              Return to Cart
            </button>
          </Link>
          <Link to="/products">
            <button className="continue">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;