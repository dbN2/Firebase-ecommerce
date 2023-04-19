import React, {useState} from 'react';
import "./CartItem.css";

export const CartItem = ({ item, updateQuantity, handleRemoveItem }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cartItem">
      <div className="description">
        <img src={item.image} alt={item.name} width="200" height="250" />
        <p>{item.name}</p>
        <p>Price: ${item.price}</p>
        <div className="quantity">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
      </div>
      <button
        className="removeFromCartButton"
        onClick={() => handleRemoveItem(item.id)}
      >
        Remove from Cart
      </button>
    </div>
  );
};