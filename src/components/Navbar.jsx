import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          React
        </Link>
        <div className="ms-auto">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="btn btn-primary" aria-current="page" to="/add-product">
                Add Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
