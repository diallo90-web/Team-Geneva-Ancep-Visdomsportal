import React from 'react';
import './ImageWithTextRight.css';

import MediumBtn from "../shared/mediumbutton/MediumBtn"

import arneRight from "../../images/arne-left2.png"

const ImageWithTextRight = ({title, description, imgSrc, imgAlt}) => {
  return (
    <div className="container-right">

      <div className="image-container-right">
        <div className="image-wrapper-right">
          <img className='image-wrapper-right__img' src={arneRight} alt={arneRight}/>
        </div>
      </div>


      
      <div className="content-container-right">
        <div className='content-container-right__wrapper'>
          <h1 className='content-container-right__h1'>Selvinnsikt & Personlig Utvikling</h1>
          <p className='content-container-right__p'>Næss' filosofiske tanker om individets forhold til naturen og samfunnet kan bidra til å utvide perspektivet og skape refleksjon rundt ens verdier, livsstil og personlige mål. Hans ideer om autentisitet og harmoni med omgivelsene kan være inspirerende for unge mennesker som søker å forstå seg selv bedre og utvikle seg på en meningsfull måte.</p>
          <MediumBtn content={"Oppdag"}/>
        </div>
      </div>
    </div>
  );
};

export default ImageWithTextRight;
