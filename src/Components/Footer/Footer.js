import React from "react";
import Button from "../../SharedUi/Button/Button";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h3>Get in Touch</h3>
                        <div>
                            <a href="mailto:ahmedromio233@gmail.com" className="text-light">
                                <span>ahmedromio233@gmail.com</span>
                            </a>
                            <br />
                            <a href="#" className="text-light">
                                <span>01550907191</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <Button
                            text="Contact me"
                            linkTo="mailto:ahmedromio233@gmail.com"
                            className="btn btn-primary"
                        />
                    </div>
                    <div className="col-12 col-md-4 text-end">
                        {/* Add content for the right-aligned section */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
