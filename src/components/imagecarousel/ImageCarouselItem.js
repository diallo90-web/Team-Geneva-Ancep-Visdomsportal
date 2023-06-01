import './ImageCarouselItem.css';
import { useState } from "react";
import Slider from "react-slick";

import aktivisten from "../../images/Aktivisten.png";
import filosofen from "../../images/Filosofen.png";
import fjellklatreren from "../../images/Fjellklatreren.png";
import nasjonsbyggeren from "../../images/Nasjonsbyggeren.png";
import økosofen from "../../images/Økosofen.png";
import professoren from "../../images/Professoren.png";
import { FaChevronRight, FaChevronLeft, FaChevronDown } from "react-icons/fa";

const images = [aktivisten, filosofen, fjellklatreren, nasjonsbyggeren, økosofen, professoren];


const CarouselItem = () => {

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

    const [imageIndex, setImageIndex] = useState(0);

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
                    <div className={i == imageIndex ? "slide activeSlide" : "slide"}>
                        <img src={img} alt={img} />
                    </div>
                ))}

            </Slider>
            <h1 className="main-header">Næss' Visdomsportal</h1>
            <div className="scroll-arrow">
                <FaChevronDown />
            </div>
        </div>
    );
};


export default CarouselItem;

