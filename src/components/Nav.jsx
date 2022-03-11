import React, { useState, useEffect } from 'react';
import './Nav.css';
import Logo from './Logo'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            {/* <img 
            className="nav__logo"
            src="/images/netflix-logo.png" alt="Netflix Logo" /> */}
            <span className="nav__logo"><Logo /></span>

            <img 
            className="nav__avatar"
            src="/images/netflix-profile.jpg" alt="Netflix profile" />
        </div>
    )
}

export default Nav
