import React from "react";
import "../imagecarousel/ImagePopup.css";
import { FaChevronLeft } from "react-icons/fa";


const TextPopup = ({ text, onClose }) => {
    
    
    return (
        <div className="text-popup">
            <div className="container">
                <div className="container__text">
                    <p className="container__text-p">Formet mange generasjoner norske studenter gjennom ExPhil. Han likte å kalle ExPhil for
                        «Forberedende», det var et fag som skulle forberede oss på både livet som studenter og
                        livet som demokratiske borgere etter studiene. I utgangspunktet mente Arne at ExPhil
                        skulle være et levende og utviklende fag med dialog og diskusjon, uten karakter.
                        Yngste professor ved UiO i en alder av 27 år. En av Norges fremste forskere. Æresmedlem
                        i Vitenskapsakademiet. Ledet UNESCOs forskningsprosjekt om ideologi i perioden 1948–
                        1949.
                        6</p>
                </div>
                <div className="container__close-button" onClick={onClose}>
                    <FaChevronLeft />
                </div>
            </div>
        </div>
    );
};

export default TextPopup;