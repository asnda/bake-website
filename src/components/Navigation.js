import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // We'll create this file next for styling

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/menu">Menu</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
