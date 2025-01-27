import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import './App.css'; // Importamos los estilos globales

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <ul className="navbar-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="app-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<ContactForm />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
