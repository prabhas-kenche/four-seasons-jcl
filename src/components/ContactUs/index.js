/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Header from '../Header';
import './index.css';

const ContactUs = () => {
    return (
        <div>
            <Header />
            {/* Contact Us Section */}
            <div className="contact-us-section mt-5">
                <div className="container">
                    <div className="contact-info">
                        <h2>Contact Us</h2>
                        <p className="description">We’d love to hear from you! Whether you have a question about features, pricing, or anything else, feel free to reach out.</p>
                        <div className="contact-details">
                            <div>
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png" className="contact-logo" />
                                <p>Email: <a href="mailto:orderfood@fourseasons.com" className="contact-email">orderfood@fourseasons.com</a></p>
                                <p>Phone: <a href="tel:+918888888888" className="contact-phone">+91 63009 98125</a></p>
                                <p>Address: Hyderabad-Bangalore Highway, Jadcherla, Telangana, India.</p>
                            </div>
                        </div>
                        <div className="contact-buttons">
                            <button className="btn-primary">Send Message</button>
                            <button className="btn-secondary">Get Directions</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
        <div className="footer-section pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png" className="food-munch-logo" />
                    <h1 className="footer-section-mail-id">orderfood@fourseasons.com</h1>
                    <p className="footer-section-address">
                    
                    <div><br />
                Copyright © 2024 Four Seasons Jcl. All Rights Reserved.<br/>
                Powered by{' '}
                <a
                    href="https://www.instagram.com/vspaze_technologies?igsh=bnh5YTB6MnI5NnVx"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'underline' }}
                >
                    Vspaze Technologies
                </a>
            </div>
                    </p>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ContactUs;
