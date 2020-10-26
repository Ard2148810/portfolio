import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="content-contact">
            <div className="contact-title">
                <h2 className="contact-label">Contact</h2>
            </div>
            <div className="contact-data-container">
                <address>
                    <a href="mailto:adrian.alaszewski@gmail.com" className="address-item">
                        <FontAwesomeIcon icon={faEnvelopeSquare}
                                         style={{
                                             display: "inline-block",
                                             verticalAlign: "middle", marginRight: "8px",
                                             color: "inherit"
                                         }}
                        />
                        adrian.alaszewski@gmail.com
                    </a>
                    <a href="https://github.com/Ard2148810" className="address-item">
                        <FontAwesomeIcon icon={faGithubSquare} size="1x"
                                         style={{
                                             display: "inline-block",
                                             verticalAlign: "middle", marginRight: "8px",
                                             color: "inherit"
                                         }}
                        />
                        <span style={{color: "inherit"}}>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/adrian-ałaszewski-a75b961b7" className="address-item">
                        <FontAwesomeIcon icon={faLinkedin} size="1x"
                                         style={{
                                             display: "inline-block",
                                             verticalAlign: "middle", marginRight: "8px",
                                             color: "inherit"
                                         }}
                        />
                        <span style={{color: "inherit"}}>LinkedIn</span>
                    </a>
                </address>
            </div>
        </div>
    );
}

export default Contact;