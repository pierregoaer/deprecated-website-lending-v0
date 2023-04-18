import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import '../styles/nav.css';

export default function Nav() {
    const [mobileNavVisible, setMobileNavVisible] = useState(false)

    function handleDisplayMobileNav() {
        setMobileNavVisible((prevState => !prevState))
    }

    return (
        <header className="header--container">
            <div className="header--main">
                <Link to={'/'} className="header--logo-container">
                    <img className="header--logo" src="/logos/logo_main.png" alt=""/>
                </Link>
                <ul className="header--main-navigation" data-visible={mobileNavVisible}>
                    <li>
                        <Link to={'/services'}>Services</Link>
                    </li>
                    <li>
                        <Link to={'/réalisations'}>Réalisations</Link>
                    </li>
                    <li>
                        <Link to={'/a-propos'}>A propos</Link>
                    </li>
                    <li>
                        <Link to={'/blog'}>Blog</Link>
                    </li>
                </ul>
                <Link to={'/contact'} className="btn-primary header--main-navigation-contact">
                    Contact
                </Link>
                <div className="header--mobile-nav-icon-container" data-visible={mobileNavVisible} onClick={handleDisplayMobileNav}>
                    <div className={`mobile-nav-icon menu-top ${mobileNavVisible ? "active" : ""}`}></div>
                    <div className={`mobile-nav-icon menu-middle ${mobileNavVisible ? "active" : ""}`}></div>
                    <div className={`mobile-nav-icon menu-bottom ${mobileNavVisible ? "active" : ""}`}></div>
                </div>
            </div>
        </header>
    );
}
