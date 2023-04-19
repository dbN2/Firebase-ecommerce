import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return(
        <div className = "navbar">
            <div className = "links">
                <Link to="/shop"> Shop </Link>
                <Link to="/cart"> Cart </Link>
                <Link to="/search"> Search </Link>
            </div>
        </div>
    )
}