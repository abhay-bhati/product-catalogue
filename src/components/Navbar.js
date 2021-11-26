import "../styles/Navbar.css";
import React from "react";
import Filter from "./Filter";

function Navbar() {
  return (
    <div className="navbar">
      <h2>HyperSrot</h2>
      <div className="navbar__filter">
        <Filter search="category" />
        <Filter search="product" />
      </div>
    </div>
  );
}

export default Navbar;
