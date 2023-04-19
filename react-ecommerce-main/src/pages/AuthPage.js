import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../components/context/AuthContext";
import "./AuthPage.css";


export const AuthPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {currentUser} = useAuth();

    

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password).then((userCrendential) => {
        currentUser = userCrendential.user;
        navigate("/");
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
    setEmail("");
    setPassword("");
  };

 

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("Logging in...");
    try {
      await signInWithEmailAndPassword(auth,email, password);
      navigate("/shop");
    } catch (error) {
      setErrorMessage(error.message);
    }

  };

    return (
      <div>
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Log In</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
  
        <form onSubmit={handleSignup}>
          <h2>Register</h2>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  


 
}
export default AuthPage;