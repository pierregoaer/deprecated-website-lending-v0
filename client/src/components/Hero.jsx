import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <section className="hero--container">
            <div className="section--inner hero--main">
                <div className="hero--text">
                    <h1>Votre expert en électricité à Nîmes.</h1>
                    <p>Intervention chez professionnels et particuliers dans la région de Nîmes. Notre équipe d'experts
                        en électricité est là pour répondre au mieux aux besoins de nos clients.</p>
                    <Link to={'/contact'} className="hero--cta btn-primary">Contactez-Nous</Link>
                </div>
                <div className="hero--image">
                    <img src="/images/electricien-nimes-hero.png" alt="Electricien Nîmes"/>
                </div>
            </div>
        </section>
    );
}
