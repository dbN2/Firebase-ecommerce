import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";

export const Checkout = ({cartItems,setCartItems}) => {  //Checkout form with submit button

  const handleClearCart = () => {
    setCartItems([]);
  }

    return (

    <div class="checkout">
      <h2>Checkout</h2>

      <form>
        <label for="address">Shipping Address:</label> 
        <br></br>
        <textarea id="address" name="address" required></textarea>
        <br></br>
        
        <Link to="/thankyou"> 
          <button class ="checkoutButton" 
            type="submit" 
            onClick ={handleClearCart}>
            Submit Payment 
          </button>
        </Link>

      </form>

      </div>

    );

};