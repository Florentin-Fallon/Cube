import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/propos" className="nav-link">À propos</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
        <div>
          <Link to="/" className="user-settings-link">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="Paramètres utilisateur" className="user-icon" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
