import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useRecoilState, useRecoilValue } from 'recoil';
import { productState, cartState, cartTotalState } from '../recoil/atoms';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

function Mid() {
  const products = useRecoilValue(productState);
  const [cart, setCart] = useRecoilState(cartState);
  const cartTotal = useRecoilValue(cartTotalState);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    const total = updatedCart.reduce((total, item) => total + item.price, 0);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    const total = updatedCart.reduce((total, item) => total + item.price, 0);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const renderProducts = (startIndex, endIndex) => {
    return products.slice(startIndex, endIndex).map((product) => (
      <div key={product.id} className="card" style={{ margin: '20px' }}>
        <img
          className="card-img-top"
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '200px' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price.toFixed(2)}</p>
          {cart.some((item) => item.id === product.id) ? (
            <FaMinusCircle
              onClick={() => removeFromCart(product)}
              style={{ cursor: 'pointer', backgroundColor: 'white', color: 'green' }}
            />
          ) : (
            <FaPlusCircle
              onClick={() => addToCart(product)}
              style={{ cursor: 'pointer', backgroundColor: 'white', color: 'green' }}
            />
          )}
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="card-group" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: '280px', width: '1000px' }}>
        {renderProducts(0, 5)}
      </div>
      <div className="card-group" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: '280px', width: '1000px' }}>
        {renderProducts(5, 10)}
      </div>
    </div>
  );
}

export default Mid;
