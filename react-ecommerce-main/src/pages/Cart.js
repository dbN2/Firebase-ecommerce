import React, { useState, useEffect } from "react";
import { CartItem } from "../components/CartItem";
import "./Cart.css";
import { db } from "../firebase.js";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Checkout } from "../components/Checkout";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantities, setCartQuantities] = useState({});



  useEffect(() => {         //Get cart items from firebase database and set cartitems 
    const fetchCartItems = async () => {
      try {
        const cartRef = collection(db, "cart");
        const cartSnapshot = await getDocs(cartRef);
        const cartItemsList = cartSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCartItems(cartItemsList);
        setCartQuantities(
          cartItemsList.reduce(
            (quantities, item) => ({ ...quantities, [item.id]: item.quantity }),
            {}
          )
        );
      } catch (error) {
        console.error("Error fetching cart items: ", error);
      }
    };
    fetchCartItems();
  }, []);

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const itemRef = doc(db, "cart", itemId.toString());
  
    try {
      await updateDoc(itemRef, {
        quantity: newQuantity,
      });
      console.log("Cart item quantity updated successfully");
    } catch (error) {
      console.error("Error updating cart item quantity: ", error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    const itemRef = doc(db, "cart", itemId.toString());
  
    try {
      await deleteDoc(itemRef);
      console.log("Cart item removed successfully");

      setCartQuantities((prevQuantities) => {
        const { [itemId]: deletedItemQuantity, ...restQuantities } =
          prevQuantities;
        return restQuantities;
      });
      
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.error("Error removing cart item: ", error);
    }
  };

  const getTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * cartQuantities[item.id];
    });
    return total;
  };

  return (
    <div className="cart">
      <div className="items">
        <div>
          <h1>Cart Items</h1>
        </div>
        <div className="cartItems">
          {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            quantity={cartQuantities[item.id]}
            updateQuantity={handleUpdateQuantity}
            handleRemoveItem={handleRemoveItem}
          />
          ))}
        </div>
      </div>
      <div className="cartTotal">
        <p>Cart Total: ${getTotal(cartItems)}</p>
      </div>
      <div className="checkout">
        <Checkout setCartItems={setCartItems}>

        </Checkout>
      </div>
    </div>
  );
};