import React from 'react';
import './footer.css';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <a href="#" className="footer__logo">
                Ismat Ullah
            </a>

            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com">
                    <FaFacebookSquare />
                </a>
                <a href="https://github.com">
                    <FaGithubSquare />
                </a>
                <a href="https://instagram.com">
                    <FaInstagramSquare />
                </a>
                <a href="https://twitter.com">
                    <FaTwitterSquare />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Ismat Ullah. All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
