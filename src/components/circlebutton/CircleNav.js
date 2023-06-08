import React from 'react'
import './CircleNavStyle.css'

const CircleComponent = ({imageSrc, altTxt, txt, onClick}) => {
    return( 
        <div className='circle' onClick={onClick}>
            <img className='circle-img' src={imageSrc} alt={altTxt}/>
            <p className='circle-text'>{txt}</p>
        </div>
    ); 
};
export default CircleComponent;