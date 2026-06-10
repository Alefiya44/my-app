import React from 'react';

export default function Navbar() {
    return (
        <header className="header-wrapper">

            <div className="top-utility-bar">
                <div className="utility-left">
                    <a href="tel:+9154345533" className="utility-item">
                        <span>  <img src="/Vector.png" alt="call" style={{ height: '16px', width: '16px' }} /></span> (+91) 54345533
                    </a>
                    <span className="utility-divider">|</span>
                    <a href="#map" className="utility-item">
                        <span><img src="/location.png" alt="location" style={{ height: '16px', width: '16px' }} /></span> Location Map
                    </a>
                </div>
                <div className="utility-right">
                    <div className="utility-icons">
                        <img src="/facebook.jpg" alt="Facebook" style={{ height: '20px' }} />
                        <img src="/instagram.png" alt="Instagram" style={{ height: '20px' }} />
                        <img src="/play.png" alt="Play" style={{ height: '20px' }} />
                    </div>
                    <div className="top-search-box">
                        <span style={{ fontSize: '14px' }}><img src="/searchnormal1.png" alt="search" style={{ height: '16px', width: '16px' }} /></span>
                        <span style={{ fontSize: '13px', color: '#555' }}>Search</span>
                    </div>
                </div>
            </div>

            <div className="navbar-promo-row" >

                <div className="logo-card" >
                    <img
                        src="/CoKarma_logo1 2.png"
                        alt="CoKarma Logo"
                        style={{ height: '100px', width: 'auto', display: 'block'  }}
                    />
                </div>

                <div className="navbar-right">
                    <div className="nav-top">
                        <ul className="nav-links">
                            <li>Home</li>
                            <li>Profile</li>
                            <li>Tickets</li>
                            <li>Offers</li>
                            <li>Space</li>
                            <li>Contact Us</li>
                        </ul>
                        <button className="login-btn">
                            <img src="/Group.png" alt="icon" style={{ width: '16px', height: '16px' }} />
                            <span>Login / Signup</span>
                        </button>
                    </div>

       <div className="promo-banner">
    <span style={{ flex: 1, textAlign: 'center' }}>
        # Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <a href="#details" style={{ textDecoration: 'none', color: '#ffffff', marginLeft: '6px' }}>
            More Details &rarr;
        </a>
    </span>
</div>
                </div>

            </div>

        </header>
    );
}