import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/footer.css';

export default function Footer() {
    return (
        <section className="footer--container">
            <div className="section--inner footer--main">
                <div className="footer--nav">
                    <div className="column-1 column flex-column">
                        <Link to={'/'} className="header--logo-container">
                            <img className="header--logo" src="/logos/logo_main.png" alt=""/>
                        </Link>
                        <p>sit cillum commodo dolore minim labore labore veniam fugiat voluptate dolor labore cillum
                            deserunt aute</p>
                    </div>
                    <div className="column-2 column flex-column">
                        <p className="column-title">Menu</p>
                        <Link to={'/'}>A propos</Link>
                        <Link to={'/'}>Blog</Link>
                    </div>
                    <div className="column-3 column flex-column">
                        <p className="column-title">Services</p>
                        <Link to={'/'}>Electricité</Link>
                        <Link to={'/'}>Climatisation</Link>
                        <Link to={'/'}>Chauffage</Link>
                        <Link to={'/'}>Accompagnement</Link>
                    </div>
                    <div className="column-4 column flex-column">
                        <p className="column-title">Vous cherchez un expert ?</p>
                        <Link to={'/contact'} className="btn-primary">Contactez-Nous</Link>
                    </div>
                </div>
                <div className="footer--copyrights">
                    © Copyright {new Date().getFullYear()}, Eletricien Nîmes
                </div>
            </div>
        </section>
    );
}
