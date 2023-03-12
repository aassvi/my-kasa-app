  /** 
  *  Utilisation de Hook useLocation de react-router-dom pour obtenir l'emplacement de l'utilisateur actuel. 
  *  puis teste avec path si bonne url et ajoute classe active 
  */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import logom from '../assets/logom.png';

function Header() {
  
    const location = useLocation();

    return (
        <div className='kasa-header'>
            <div className='kasa-header-logo'>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='kasa-header-logomobile'>
            <img src={logom} className="App-logomobile" alt="logo mobile" />
            </div>
            <div className='kasa-header-nav'>
            <nav>
               <Link className={location.pathname === "/" ? "Accueil active" : "Accueil"} to="/" >Accueil</Link>
               <Link className={location.pathname === "/Apropos" ? "Apropos active" : "Apropos"} to="/Apropos">A Propos</Link>
            </nav>
            </div>
        </div>
    )
}

export default Header;
