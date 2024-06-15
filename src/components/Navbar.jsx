import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/link">Link</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/admin-login">Admin</Link></li>
                <li><Link className="dropdown-item" to="/volunteer-login">Volunteer</Link></li>
                <li><Link className="dropdown-item" to="/vendor-login">Vendor</Link></li>
                <li><Link className="dropdown-item" to="/buyer-login">Buyer</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Signup
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/admin-signup">Admin</Link></li>
                <li><Link className="dropdown-item" to="/volunteer-signup">Volunteer</Link></li>
                <li><Link className="dropdown-item" to="/vendor-signup">Vendor</Link></li>
                <li><Link className="dropdown-item" to="/buyer-signup">Buyer</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <hr className="dropdown-divider" />
      </div>
    </nav>
  );
};

export default Navbar;
