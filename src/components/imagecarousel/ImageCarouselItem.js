import './ImageCarouselItem.css';
import { useState } from "react";
import Slider from 'react-slick';

import ImagePopup from './ImagePopup';

import aktivisten from "../../images/Aktivisten.png";
import filosofen from "../../images/Filosofen.png";
import fjellklatreren from "../../images/Fjellklatreren.png";
import nasjonsbyggeren from "../../images/Nasjonsbyggeren.png";
import økosofen from "../../images/Økosofen.png";
import professoren from "../../images/Professoren.png";
import { FaChevronRight, FaChevronLeft, FaChevronDown } from "react-icons/fa";

const images = [aktivisten, filosofen, fjellklatreren, nasjonsbyggeren, økosofen, professoren];


const CarouselItem = () => {

    const [imageIndex, setImageIndex] = useState(0);

    // Bare for å sjekke om dette funker:
    const [showPopup, setShowPopup] = useState(false);
    const [popupText, setPopupText] = useState("");

    const openImagePopup = (text) => {
        setPopupText(text);
        setShowPopup(true);
    };

    const closeImagePopup = () => {
        setShowPopup(false);
        setPopupText("");
    };



    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaChevronRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaChevronLeft />
            </div>
        );
    };


    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };



    return (
        <div className="image-carousel">
            <Slider {...settings}>
                {images.map((img, i) => (
                    <div onClick={() => openImagePopup(img)} className={i == imageIndex ? "slide activeSlide" : "slide"}>
                        <img src={img} alt={img} />
                    </div>
                ))}
            </Slider>
            <div className="main-header">
                <h1 className='header'>Næss' Visdomsportal</h1>
                <h3>Velkommen til Arne Næss' Digitale Filosofibibliotek</h3>
                <ul>
                {textArray.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
                </ul>
            </div>
            <div className="scroll-arrow">
                <FaChevronDown />
            </div>
            {showPopup && (
                <ImagePopup text={popupText} onClose={closeImagePopup} />
            )}
        </div>
    );
};


export default CarouselItem;

