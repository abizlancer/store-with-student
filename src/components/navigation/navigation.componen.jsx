import { useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-drowpdown/cart-dropdown.component";

import { CartContext } from "../../context/cart.context";

import "./navigation.styles.scss";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext) 

  return (
    <div>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <span>Logo</span>
        </Link>

        <ul className="nav-links-container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </li>
          <CartIcon />
        </ul>
        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </div>
  );
};

export default Navigation;
