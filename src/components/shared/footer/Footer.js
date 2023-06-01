import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"
import "./Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">

                <div className="link-div">
                    <Link to="" className="faq">FAQ</Link>
                    <Link to="" className="about">Om oss</Link>
                    <Link to="" className="contact">Kontakt oss</Link>
                </div>

                <div className="icons-div">
                    <Link to="https://www.facebook.com/profile.php?id=100066240203556" className="icon-link">
                    <FaFacebook size={35} className="face"></FaFacebook>
                    </Link>
                    <Link to="" className="icon-link">
                    <FaInstagram size={35} className="insta"></FaInstagram>
                    </Link>
                    <Link to="" className="icon-link">
                    <FaTwitter size={35} className="twitter"></FaTwitter>
                    </Link>
                </div>

                <p className="ancep">ANCEP</p>

            </div> 
        </footer>
    );
};

export default Footer;