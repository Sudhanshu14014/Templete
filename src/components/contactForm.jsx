import DownloadBox from "./download";

const ContactForm = () => {
    return (
        <div className="contact-div">
            <DownloadBox />
            <div className="all-contact">
                <div className="contact-desc-div">
                    <h2 className="contact-title">Get in touch</h2>
                    <i className="contact-notice">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Rem nesciunt nulla laudantium porro odit itaque
                        eveniet quod modi vel eius.
                    </i>
                    <p className="contact-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus voluptatum, dolor voluptatem itaque
                        eligendi reiciendis veniam et quia. Rem ipsam ut, omnis
                        fugit dignissimos eaque non quidem repellendus quos
                        porro!
                    </p>
                    <div className="contact-btn-box">
                        <button className="contact-btn">
                            <a href="#" class="fa fa-facebook"></a>
                        </button>
                        <button className="contact-btn">
                            <a href="#" class="fa fa-twitter"></a>
                        </button>
                        <button className="contact-btn">
                            <a href="#" class="fa fa-instagram"></a>
                        </button>
                        <button className="contact-btn">
                            <a href="#" class="fa fa-yahoo"></a>
                        </button>
                        <button className="contact-btn">
                            <a href="#" class="fa fa-youtube"></a>
                        </button>
                    </div>
                </div>
                <div className="contact-details-div">
                    <h4>call us</h4>
                    <p>21345678976543</p>
                    <p>13245676543223</p>
                    <h4>location</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Debitis, esse?
                    </p>
                    <h4>Our top services</h4>
                    <ul className="contact-services">
                        <li className="contact-service">Local transfers</li>
                        <li className="contact-service">Airport Transfers</li>
                        <li className="contact-service">
                            Excursions and Tours
                        </li>
                    </ul>
                </div>
                <div className="contact-form">
                    <input
                        type="text"
                        className="contact-input"
                        placeholder="Enter your name"
                    />
                    <input
                        type="text"
                        className="contact-input"
                        placeholder="Enter a valid email address"
                    />
                    <textarea
                        className="contact-textarea"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <button className="contact-submit" type="submit">
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
