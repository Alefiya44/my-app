export default function VisitForm() {
    return (
        <div className="visit-form-container">
            <div className="visit-form">
                <h2>Request for a visit</h2>
                <p className="form-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className="form-grid">
                    <div className="form-field">
                        <label className="field-label">Name</label>
                        <input type="text" placeholder="" />
                    </div>

                    <div className="form-field">
                        <label className="field-label">Email</label>
                        <input type="email" placeholder="" />
                    </div>

                    <div className="form-field">
                        <label className="field-label">Mobile</label>
                        <input type="text" placeholder="" />
                    </div>

                    <div className="form-field">
                        <label className="field-label">Select city</label>
                        <select defaultValue="">
                            <option value="" disabled>Select city</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="pune">Pune</option>
                            <option value="bangalore">Bangalore</option>
                        </select>
                    </div>

                    <div className="form-field form-btn-wrapper">
                        <label className="field-label">&nbsp;</label>
                        <button type="submit" className="request-btn">
                            <img
                                src="/searchnormal1.png"
                                alt="submit"
                               style={{fontFamily:'Inter' , height: '20px', width: '20px' }} 
                            />
                            Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}