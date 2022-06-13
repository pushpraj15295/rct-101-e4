import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div data-cy="navbar" style={{display:"flex", justifyContent:"space-between", margin:"10px" }} >
      <div>
          <Link to="/" >Home</Link>
        <a data-cy="navbar-home-link"></a>
      </div>
      <div  style={{display:"flex", justifyContent:"space-between" }}>
        <div data-cy="navbar-cart-items-count">Cart : {0}</div>  &nbsp;
        <button data-cy="navbar-login-logout-button">logout</button>
      </div>
    </div>
  );
};

export default Navbar;
