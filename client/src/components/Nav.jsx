import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import '../styles/nav.css';

export default function Nav() {
    const [mobileNavVisible, setMobileNavVisible] = useState(false)

    function handleDisplayMobileNav() {
        setMobileNavVisible((prevState => !prevState))
    }

    return (
        <header className="nav-container">
            <div className="nav-main">
                <Link to={'/'} className="nav-logo-container">
                    <img className="nav-logo" src="/logos/logo_main.png" alt=""/>
                </Link>
                <ul className="nav-main-navigation" data-visible={mobileNavVisible}>
                    <li className="nav-main-navigation-dropdown">
                        {/*<p className="nav--main-navigation-title">Services</p>*/}
                        <Link to={'/services'} onClick={handleDisplayMobileNav}
                              className="nav-main-navigation-title">Services</Link>
                        <ul className="nav-main-navigation-dropdown-list">
                            <li><Link to={'/installation'} onClick={handleDisplayMobileNav}>Installation</Link></li>
                            <li><Link to={'/renovation-et-mise-aux-normes'} onClick={handleDisplayMobileNav}>Rénovation
                                et mise aux normes</Link></li>
                            <li><Link to={'/depannage-et-maintenance'} onClick={handleDisplayMobileNav}>Dépannage et
                                maintenance</Link></li>
                            <li><Link to={'/eclairage'} onClick={handleDisplayMobileNav}>Éclairage</Link></li>
                            <li><Link to={'/domotique-et-objets-connectes'} onClick={handleDisplayMobileNav}>Domotique
                                et objets connectés</Link></li>
                        </ul>
                    </li>
                    <li className="nav-main-navigation-dropdown">
                        {/*<p className="nav--main-navigation-title">Réalisations</p>*/}
                        <Link to={'/realisations'} onClick={handleDisplayMobileNav}
                              className="nav-main-navigation-title">Réalisations</Link>
                        <ul className="nav-main-navigation-dropdown-list">
                            <li><Link to={'/projets-residentiels'} onClick={handleDisplayMobileNav}>Projets
                                résidentiels</Link></li>
                            <li><Link to={'/projets-commerciaux'} onClick={handleDisplayMobileNav}>Projets
                                commerciaux</Link></li>
                            <li><Link to={'/projets-industriels'} onClick={handleDisplayMobileNav}>Projets
                                industriels</Link></li>
                        </ul>
                    </li>
                    <li className="nav-main-navigation-title">
                        <Link to={'/a-propos'} onClick={handleDisplayMobileNav}>A propos</Link>
                    </li>
                    <li className="nav-main-navigation-title">
                        <Link to={'/blog'} onClick={handleDisplayMobileNav}>Blog</Link>
                    </li>
                </ul>
                <Link to={'/contact'} className="btn-primary nav-main-navigation-contact">Contact</Link>
                <div className="nav-mobile-nav-icon-container" data-visible={mobileNavVisible}
                     onClick={handleDisplayMobileNav}>
                    <div className={`mobile-nav-icon menu-top ${mobileNavVisible ? "active" : ""}`}></div>
                    <div className={`mobile-nav-icon menu-middle ${mobileNavVisible ? "active" : ""}`}></div>
                    <div className={`mobile-nav-icon menu-bottom ${mobileNavVisible ? "active" : ""}`}></div>
                </div>
            </div>
        </header>
    );
}
