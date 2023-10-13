import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { cartState } from '../recoil/atoms';
import './Navbar.css';

function Navbar() {
  const cart = useRecoilValue(cartState);

  return (
    <div className="navbar">
      <div>
        <h1>E-Commerce</h1>
      </div>
      <div className="cart">
        <button className="cart-button">
          <FaShoppingCart size={24} />
          <span className="cart-count">{cart.length}</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
