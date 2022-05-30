import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaBook, FaServicestack, FaPhoneSquareAlt } from 'react-icons/fa';

import './nav.css';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
                <FaHome />
            </a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
                <FaUserAlt />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}
            >
                <FaBook />
            </a>
            <a
                href="#services"
                onClick={() => setActiveNav('#services')}
                className={activeNav === '#services' ? 'active' : ''}
            >
                <FaServicestack />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}
            >
                <FaPhoneSquareAlt />
            </a>
        </nav>
    );
};

export default Nav;
