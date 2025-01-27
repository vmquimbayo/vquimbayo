import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2025 Victor Quimbayo. All Rights Reserved.</p>
            <div className="social-links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
            </div>
        </footer>
    );
};

export default Footer;
