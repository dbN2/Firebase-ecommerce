import { db } from "../firebase.js";
import {
  getDoc,
  setDoc,
  doc,
  updateDoc
} from "firebase/firestore";

export const getDefaultCart = (productsList) => {

  let cart = {};
  for (let i = 0; i < productsList.length; i++) {
    cart[productsList[i].id] = 0; // use product id as key in cart object
  }
  return cart;
};

  export const handleAddToCart = async (product) => {
    const cartRef = doc(db, "cart", product.id.toString());
    try {
      const cartDoc = await getDoc(cartRef);
      if (cartDoc.exists()) {
        const { quantity } = cartDoc.data();
        await updateDoc(cartRef, { quantity: quantity + 1 });
      } else {
        await setDoc(cartRef, {
          id: product.id,
          quantity: 1,
          image: product.image,
          name: product.name,
          price: product.price,
        });
      }
      console.log("Product added to cart successfully");
    } catch (error) {
      console.error("Error adding product to cart: ", error);
    }
  };