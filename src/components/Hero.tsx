export default function Hero() {
    return (
        <>
            {/* PHASE 4: PROMO BANNER */}
            <div className="promo-banner">
                <span>Free Sites.</span>
                <a href="#details">More Details &rarr;</a>
            </div>

            {/* PHASE 5: HERO CONTENT SECTION */}
            <section className="hero">
                <div className="hero-container">
                    <button className="nav-arrow left-arrow">←</button>
                    <div className="overlay">
                        <h1>
                            Lorem ipsum dolor sitamet <br /> consectetur adipisicing elit
                        </h1>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollit,<br />
                            molestiae quas vel sint commodi repudiandae consequuntur<br />
                            voluptatum laborum numquam blanditiis harum quisquam<br />
                            cius sed odit fugiat iustofuga praesentiun optio, eaque rerum!
                        </p>

                        <button className="hero-btn">
                            View More
                        </button>
                    </div>
                    <button className="nav-arrow right-arrow">→</button>
                </div>
            </section>
        </>
    );
}