import React from "react";
import "../imagecarousel/TextPopup.css";
import { FaChevronLeft } from "react-icons/fa";


const TextPopup = ({ text, onClose }) => {
    
    
    return (
        <div className="text-popup">
            <div className="container">
                <div className="container__text">
                    <p className="container__text-p">{text}</p>
                </div>
                <div className="container__close-button" onClick={onClose}>
                    <FaChevronLeft />
                </div>
            </div>
        </div>
    );
};

export default TextPopup;
