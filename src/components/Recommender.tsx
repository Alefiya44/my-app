import React from 'react';

export default function Recommender() {
    return (
        <section className="recommender-section">
            <div className="recommender-container">

                {/* Header Section */}
                <div className="recommender-header">
                    <h2 className="recommender-title">RECOMMENDED FOR YOU</h2>
                    <p className="recommender-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                {/* Magazine/Editorial Masonry Layout Grid */}
                <div className="recommender-grid">

                    {/* ── COLUMN 1 (LEFT) ── */}
                    <div className="recommender-col">
                        {/* Top Card: Large Portrait Image Card with Text Overlay inside the image */}
                        <div className="rec-card rec-h-414" style={{ backgroundImage: "url('/Recommender/1.png')" }}>
                            <div className="rec-overlay-gradient" />
                            <div className="rec-card-content">
                                <h3>Lorem ipsum dolor</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>

                        {/* Bottom Card: Smaller Dining Image Only */}
                        <div className="rec-card rec-h-274" style={{ backgroundImage: "url('/Recommender/2.png')" }} />
                    </div>

                    {/* ── COLUMN 2 (CENTER) ── */}
                    <div className="recommender-col">
                        {/* Top Card: Small Landscape Meeting Image */}
                        <div className="rec-card rec-h-218" style={{ backgroundImage: "url('/Recommender/3.png')" }} />

                        {/* Middle Card: White Structural Content Block */}
                        <div className="rec-white-card">
                            <h3>Lorem ipsum dolor</h3>
                            <p>Lorem ipsum dolor sit ametconsectetur adipisicing elit.</p>
                            <div className="rec-arrow">→</div>
                        </div>

                        {/* Bottom Card: Wide Twin Bed Image */}
                        <div className="rec-card rec-h-218" style={{ backgroundImage: "url('/Recommender/4.png')" }} />
                    </div>

                    {/* ── COLUMN 3 (RIGHT) ── */}
                    <div className="recommender-col">
                        {/* Top Card: Suite Living Area Image */}
                        <div className="rec-card rec-h-218" style={{ backgroundImage: "url('/Recommender/5.png')" }} />

                        {/* Bottom Card: Large Conference Portrait Image with Text Overlay inside the image */}
                        <div className="rec-card rec-h-470" style={{ backgroundImage: "url('/Recommender/6.png')" }}>
                            <div className="rec-overlay-gradient" />
                            <div className="rec-card-content">
                                <h3>Lorem ipsum dolor Lorem ipsum</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}