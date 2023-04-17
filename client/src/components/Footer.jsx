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
                        <a href="tel:" className="contact-phone">
                            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24"
                                 fill="none">
                                <path id="Vector"
                                      d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"
                                      stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                            00 00 00 00 00</a>
                    </div>
                </div>
                <div className="footer--copyrights">
                    © {new Date().getFullYear()}, Eletricien Nîmes
                </div>
            </div>
        </section>
    );
}
