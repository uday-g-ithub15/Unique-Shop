import React from 'react';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer >
            <p>&copy; Copyright by Unique Shop {year}</p>
        </footer>
    );
};

export default Footer;