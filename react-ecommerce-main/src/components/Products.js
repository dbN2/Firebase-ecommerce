
    

//Array of products and their properties
import { useEffect, useState } from "react";
import { db } from "../firebase.js";
import {
  collection,
  getDocs,
} from "firebase/firestore";

export const Products = () => {   //Gets products from database and returns productLists state 
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        const productsSnapshot = await getDocs(productsRef);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductsList(productsList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  


  return { productsList};
};


// export const PRODUCTS = [
//     {
//         id: 1,
//         name: "Greatsword",
//         price: 1500,
//         image: greatswordImage,
//         description: "A great sword."
//     },
//     {
//         id: 2,
//         name: "Feline",
//         price: 300,
//         image: catImage,
//         description: "Schrodinger's cat."
//     },{
//         id: 3,
//         name: "Albanian Flag",
//         price: 12,
//         image: flagImage,
//         description: "A great flag."
//     },{
//         id: 4,
//         name: "Boots",
//         price: 100,
//         image: bootsImage,
//         description: "Wingtip boots."
//     },{
//         id: 5,
//         name: "Coat",
//         price: 75,
//         image: m65Image,
//         description: "An olive field jacket."
//     },{
//         id: 6,
//         name: "Dango",
//         price: 7,
//         image: dangoImage,
//         description: "A great snack."
//     },{
//         id: 7,
//         name: "Envelope",
//         price: 20,
//         image: envelopeImage,
//         description: "What's in it?"
//     },{
//         id: 8,
//         name: "Honda Civic",
//         price: 22500,
//         image: civicImage,
//         description: "A great car."
//     },{
//         id: 9,
//         name: "Icicle",
//         price: 49,
//         image: icicleImage,
//         description: "A carefully constructed icicle."
//     },{
//         id: 10,
//         name: "Jewelry",
//         price: 1800,
//         image: emeraldImage,
//         description: "A nice emerald ring."
//     },{
//         id: 11,
//         name: "Key",
//         price: 10000,
//         image: keyImage,
//         description: "A mysterious key. Only one in stock!"
//     },{
//         id: 12,
//         name: "Leica M3",
//         price: 3200,
//         image: leicaImage,
//         description: "A vintage camera."
//     }
    
    

    

    
