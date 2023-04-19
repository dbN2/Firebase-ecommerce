import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Product } from "./Product";

//Component that displays products using get method of Firebase
export const ProductsList = ({ addToCart}) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductsList(productsList);
    };
    getProducts();
  }, []);

  return (
    <div className="products">
      {productsList.map((product) => (
        <div key={product.id} className="product">
          <Product
            product={product}
            addToCart={addToCart}
          />
        </div>
      ))}
    </div>
  );
};