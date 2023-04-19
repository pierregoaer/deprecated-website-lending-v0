import React, {useEffect, useState} from 'react';

import '../styles/contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function handleChange(event) {
        const target = event.target;
        const {name, value} = target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }


    function handleSubmit(event) {
        event.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            console.log("Fields are empty.")
            return
        }
        const dataJSON = JSON.stringify(formData);

        fetch('http://127.0.0.1:5000/contact', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: dataJSON,
        }).then(response => console.log(response.status));
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
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </div>
                        <div className="contact--form-field">
                            <label htmlFor="email">Email*</label>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                        <div className="contact--form-field">
                            <label htmlFor="phone">Téléphone</label>
                            <input
                                type="text"
                                placeholder="Téléphone"
                                name="phone"
                                onChange={handleChange}
                                value={formData.phone}
                            />
                        </div>
                        <div className="contact--form-field">
                            <label htmlFor="message">Votre message*</label>
                            <textarea
                                placeholder="Comment peut-on vous aider ?"
                                name="message"
                                onChange={handleChange}
                                value={formData.message}
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
