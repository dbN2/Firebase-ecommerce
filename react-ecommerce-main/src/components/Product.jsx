import React from 'react';
import "./Product.css";
import {handleAddToCart} from "./cart-functions";
import { Link } from 'react-router-dom';

export const Product = ({product}) => {
     
    return (
    <div className = "product">         
        <div className="description">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
            </Link>
            <p> Price: ${product.price}</p>
        </div>
        <button className="addtoCartButton" onClick={() => handleAddToCart(product)}>
             Add to Cart
        </button>
    </div>
    );
};