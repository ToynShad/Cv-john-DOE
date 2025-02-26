import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="logo-text">JOHN DOE</span>
        </Link>
        <nav className={`navbar navbar-expand-lg navbar-dark ${isNavOpen ? 'active' : ''}`}>
          <button className="navbar-toggler" type="button" onClick={toggleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link text-uppercase ${location.pathname === '/' ? 'active' : ''}`}
                  to="/"
                >
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-uppercase ${location.pathname === '/services' ? 'active' : ''}`}
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-uppercase ${location.pathname === '/realisations' ? 'active' : ''}`}
                  to="/realisations"
                >
                  Réalisations
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-uppercase ${location.pathname === '/blog' ? 'active' : ''}`}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-uppercase ${location.pathname === '/contact' ? 'active' : ''}`}
                  to="/contact"
                >
                  Me contacter
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;