import React from 'react'
import './CircleNavStyle.css'
import BrainImage from "../../images/NavImg.png"

const CircleComponent = ({imageSrc, altTxt, txt, onClick}) => {
    return( 
        <div className='circle' onClick={onClick}>
            <img className='circle-img' src={BrainImage} alt={altTxt}/>
        </div>
    ); 
};
export default CircleComponent;