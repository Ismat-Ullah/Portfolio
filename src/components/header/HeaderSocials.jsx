import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://facebook.com" target="_blank">
                <FaFacebookSquare />
            </a>
            <a href="https://github.com" target="_blank">
                <FaGithubSquare />
            </a>
            <a href="https://instagram.com" target="_blank">
                <FaInstagramSquare />
            </a>
            <a href="https://twitter.com" target="_blank">
                <FaTwitterSquare />
            </a>
        </div>
    );
};

export default HeaderSocials;
