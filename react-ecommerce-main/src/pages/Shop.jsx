import { React } from "react";
import "./Shop.css";
import { ProductsList } from "../components/ProductsList";
import { handleAddToCart } from "../components/cart-functions";


export const Shop = ({ cartItems, setCartItems }) => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Shop</h1>
      </div>
      <ProductsList
        addToCart={handleAddToCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
};