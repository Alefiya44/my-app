export default function VisitForm() {
    return (
        <div className="visit-form-container">
            <div className="visit-form">
                <h2>Request for a visit</h2>
                <p className="form-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className="form-grid">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder=""
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder=""
                        />
                    </div>

                    <div className="form-group">
                        <label>Mobile</label>
                        <input
                            type="text"
                            placeholder=""
                        />
                    </div>

                    <div className="form-group">
                        <label>Select city</label>
                        <select defaultValue="">
                            <option value="" disabled>Select city</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="pune">Pune</option>
                            <option value="bangalore">Bangalore</option>
                        </select>
                    </div>

                    <button type="submit" className="form-btn">
                        Request
                    </button>
                </div>
            </div>
        </div>
    );
}