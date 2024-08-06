import React, { useEffect } from 'react';

function Header() {
    useEffect(() => {
        const bar = document.getElementById('bar');
        const navbar = document.getElementById('navbar');
        const closebutton = document.getElementById('close');

        if (bar) {
            bar.addEventListener('click', toggleMenu);
        }

        if (closebutton) {
            closebutton.addEventListener('click', toggleMenu);
        }

        return () => {
            if (bar) {
                bar.removeEventListener('click', toggleMenu);
            }
            if (closebutton) {
                closebutton.removeEventListener('click', toggleMenu);
            }
        };
    }, []);

    const toggleMenu = () => {
        const navbar = document.getElementById('navbar');
        const bar = document.getElementById('bar');
        const closebutton = document.getElementById('close');

        navbar.classList.toggle('active');
        closebutton.classList.toggle('active');
        bar.classList.toggle('active');
    };

    return (
        <>
            <section id="Main-header">
                <h4 className="logo"> <span>R</span>ishabh..</h4>
                <div>
                    <ul id="navbar">
                        <li><a href="#hero-section">Home</a></li>
                        <li><a href="#about-section">About</a></li>
                        <li><a href="#projects-section">My Work</a></li>
                        <li><a href="#footer-section">Contacts</a></li>
                    </ul>
                </div>
                <div id="mobile">
                    <ion-icon id="bar" className="i3" name="menu"></ion-icon>
                    <ion-icon id="close" className="i3" name="close-outline"></ion-icon>
                </div>
            </section>
        </>
    );
}

export default Header;
