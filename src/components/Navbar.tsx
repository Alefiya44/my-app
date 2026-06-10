import React from 'react';

export default function Navbar() {
    return (
        <header className="header-wrapper">
            {/* PHASE 2: TOP UTILITY BAR */}
            <div className="top-utility-bar">
                <div className="utility-left">
                    <a href="tel:+919724733568" className="utility-item">
                        <span>📞</span> (+91) 9724733568
                    </a>
                    <a href="#map" className="utility-item">
                        <span>📍</span> Location Map
                    </a>
                </div>

                <div className="utility-right">
                    <div className="utility-icons">
                    <img
                        src="/facebook.jpg"
                        alt="Facebook Icon"
                        style={{ height: '20px' }}
                    />
           
                        <span>
                            <img
                        src="/instagram.png"
                        alt="Instagram Icon"
                        style={{ height: '20px' }}
                    />
                        </span>
                    </div>
                    <div className="utility-right">
                        <span>
                            <img
                        src="/play.png"
                        alt="Search Icon"
                        style={{ height: '20px' }}
                    />
                        </span>

                    </div>
                </div>
            </div>

            {/* PHASE 3: MAIN NAVIGATION BAR */}
            <nav className="navbar">
                <div className="logo">
                    <img
                        src="/CoKarma_logo1 2.png"
                        alt="CoKarma Logo"
                        style={{ height: '90px' }}
                    />
                </div>

                <ul className="nav-links">
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Tickets</li>
                    <li>Offers</li>
                    <li>Space</li>
                    <li>Contact Us</li>
                </ul>

                <button className="login-btn">
                   
                    <img
                        src="/Group.png"
                        alt="icon"
                        style={{ width: '16px', height: '16px' }}
                    />
                     <span>Login / Signup</span>
                </button>
            </nav>
        </header>
    );
}