import React from 'react';
import './ImageWithTextLeft.css';
import MediumBtn from '../shared/mediumbutton/MediumBtn';
import arneLeft from "../../images/arne-right2.png"

const ImageWithTextLeft = () => {
    return (
      <div className="container-left">
        
        <div className="content-container-left">
          <div className='content-container-left__wrapper'>
            <h1 className='content-container-left__h1'>Miljøforkjemper</h1>
            <p className='content-container-left__p'>Arne Næss' arbeid innen dypøkologi og miljøvern kan inspirere og øke bevisstheten om viktigheten av å ta vare på naturen og miljøet. Dette kan bidra til å motivere og oppmuntre unge mennesker til å handle ansvarlig og engasjere seg i bærekraftige handlinger.</p>
            <MediumBtn content={"Utforsk"}/>
          </div>
        </div>

        <div className="image-container-left">
          <div className="image-wrapper-left">
            <img className='image-wrapper-left__img' src={arneLeft} alt={arneLeft}/>
          </div>
        </div>
      </div>
    );
  };




export default ImageWithTextLeft; 