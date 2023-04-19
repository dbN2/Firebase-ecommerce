import React, { useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { ProductPage } from "./pages/ProductPage";
import { SearchPage } from "./pages/SearchPage";
import { Cart } from './pages/Cart';
import { getDefaultCart} from './components/cart-functions';
import { Navbar } from "./components/Navbar";
import {ThankYouPage} from "./pages/ThankYouPage";
import {Products} from "./components/Products";
import {AuthPage} from "./pages/AuthPage";
import ProtectedRoute from "./routes/ProtectedRoutes";
import { AuthProvider } from "./components/context/AuthContext";

function App() {
  const { productsList } = Products();
  const [cartItems, setCartItems] = useState(() => getDefaultCart(productsList));

  return (
    <AuthProvider>
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route
              path="/shop"
              element={
                <ProtectedRoute>
                  <Shop
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                  />
                </ProtectedRoute>
              }
            />

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart/>
                </ProtectedRoute>
              }
            />

            <Route
              path="/product/:id"
              element={
                <ProtectedRoute>
                  <ProductPage
                    productsList={productsList}
                  />
                </ProtectedRoute>
              }
            />

            <Route
              path="/search"
              element={
                <ProtectedRoute>
                  <SearchPage
                    productsList={productsList}
                  />
                </ProtectedRoute>
              }
            />

            <Route path="/thankyou" element={<ThankYouPage />} />
          </Routes>
      </Router>
    </div>
    </AuthProvider>

  );
}

export default App;