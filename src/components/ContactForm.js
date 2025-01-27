import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '', // Cambiamos a 'email'
        phone_number: '',
        subject: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message.');
            }

            const result = await response.json();
            setSuccessMessage('Your message has been sent successfully!');
            setFormData({
                full_name: '',
                email: '', // Reseteamos 'email'
                phone_number: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            setErrorMessage('Failed to send your message. Please try again later.');
        }
    };

    return (
        <div className="contact-form-container">
            <h1>Get in touch</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis
                massa lectus massa in quis pretium.
            </p>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="full_name">Full name</label>
                        <input
                            type="text"
                            id="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email" // Usamos 'email' como id
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                            type="tel"
                            id="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Enter the subject"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Write your message here</label>
                    <textarea
                        id="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="contact-button">Send message</button>
            </form>
            <div className="contact-social-links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer"></a>
            </div>
        </div>
    );
};

export default ContactForm;
