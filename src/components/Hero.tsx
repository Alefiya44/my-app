export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
           <button className="nav-arrow left-arrow">
    <img src="/arrowleft.png" alt="previous" style={{ height: '18px', width: '18px' }} />
</button>
                <div className="overlay">
                    <div className="hero-text">
                        <h1>
                            Lorem ipsum dolor sitamet <br /> consectetur adipisicing elit
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,<br />
                            molestiae quas vel sint commodi repudiandae consequuntur<br />
                            voluptatum laborum numquam blanditiis harum quisquam<br />
                            eius sed odit fugiat iustofuga praesentium optio, eaque rerum!
                        </p>
                        <button className="hero-btn">View More</button>
                    </div>
                </div>
                <button className="nav-arrow right-arrow">
    <img src="/arrowright.png" alt="next" style={{ height: '18px', width: '18px' }} />
</button>
            </div>
        </section>
    );
}