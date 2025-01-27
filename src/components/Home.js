import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <header className="home-header">
                    <h1>Hey there,</h1>
                    <h2>I'm Victor Quimbayo</h2>
                    <h3>Web Developer</h3>
                    <p>
                        I specialize in creating modern, responsive websites and applications.
                        Let's build something amazing together!
                    </p>
                    <Link to="/contact">
                        <button className="contact-button">Get in touch</button>
                    </Link>                </header>
                <section className="home-stats">
                    <div>
                        <h1>5+</h1>
                        <p>Years of experience</p>
                    </div>
                    <div>
                        <h1>50+</h1>
                        <p>Completed projects</p>
                    </div>
                    <div>
                        <h1>30+</h1>
                        <p>Satisfied clients</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
