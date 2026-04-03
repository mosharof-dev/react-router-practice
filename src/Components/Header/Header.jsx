import React from 'react';
import {  NavLink } from 'react-router';
import "./Header.css"
const Header = () => {
    return (
        <div>
          
        <h1>Frontend Developer</h1>
        
        <nav
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px 20px",
    backgroundColor: "#111"
  }}
>
  <NavLink to="/home" style={{ color: "white", textDecoration: "none" }}>
    Home
  </NavLink>

  <NavLink to="/product" style={{ color: "white", textDecoration: "none" }}>
    Product
  </NavLink>

  <NavLink to="/mobile" style={{ color: "white", textDecoration: "none" }}>
    Mobile
  </NavLink>
   <NavLink to="/Users" style={{ color: "white", textDecoration: "none" }}>
    Users
  </NavLink>
   <NavLink to="/Use" style={{ color: "white", textDecoration: "none" }}>
    Use
  </NavLink>
  <NavLink to="/user" style={{ color: "white", textDecoration: "none" }}>
    Details
  </NavLink>
</nav>
        
          
            
        </div>
    );
};

export default Header;