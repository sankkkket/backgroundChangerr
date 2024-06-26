import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">SHREE</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" >About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" >Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/join" >Join</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/github" >Github</NavLink>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
