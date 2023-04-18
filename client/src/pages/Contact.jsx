import React from 'react';

import '../styles/contact.css';

export default function Contact() {

    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <>
            <section className="contact--container">
                <div className="section--inner contact--main">
                    <div className="contact--text">
                        <h1>Contact</h1>
                        <div className="contact--text-section">
                            <p>Horaires</p>
                            <p>Du lundi au vendredi,<br/>de 8h à 17h</p>
                        </div>
                        <div className="contact--text-section">
                            <p>Adresse</p>
                            <p>14 Bd Victor Hugo,<br/>30000 Nîmes, France</p>
                        </div>
                        <div className="contact--text-section">
                            <p>Téléphone</p>
                            <a href="tel:0466644607" className="contact-phone">04 66 64 46 07</a>
                        </div>
                        <div className="contact--text-section"></div>
                    </div>
                    <form className="contact--form">
                        <div className="contact--form-field">

                            <label htmlFor="name">Nom*</label>
                            <input
                                type="text"
                                placeholder="Nom complet"
                                name="name"
                            />
                        </div>
                        <div className="contact--form-field">
                            <label htmlFor="email">Email*</label>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                            />
                        </div>
                        <div className="contact--form-field">
                            <label htmlFor="phone">Téléphone</label>
                            <input
                                type="text"
                                placeholder="Téléphone"
                                name="phone"
                            />
                        </div>
                        <div className="contact--form-field">
                            <label htmlFor="message">Votre message*</label>
                            <textarea
                                placeholder="Votre message"
                                name="message"
                            />
                        </div>
                        <p className="contact--form-disclaimer">Les champs marqués d'un * sont requis.</p>
                        <button type="submit" className="btn-primary" onClick={handleSubmit}>Envoyer</button>
                    </form>

                </div>
            </section>
        </>
    );
}
