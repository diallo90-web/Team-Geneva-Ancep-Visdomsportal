import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Planet } from 'react-planet';
import fremgang from "../../images/HusLogo.png"
import navBackground from "../../images/NavPagePic.png"
import "./Navigation.css"



const Navigation = () =>{

    const PlanetItem = ({ text, logo, to }) => (
        <div className="planet-item">
          <div className="planet-circle">
            <img src={logo} alt="Logo" className="planet-logo" />
            <span className="planet-text">{text}</span>
          </div>
        </div>
      );

      /*
      <PlanetItem text={"Test"} logo={fremgang}/>
        <PlanetItem text={"Test"} logo={fremgang}/>
        <PlanetItem text={"Test"} logo={fremgang}/>
        <PlanetItem text={"Test"} logo={fremgang}/>

        <div className="center-image">
       <img classname="navpage-image"src={navBackground} alt="Navpage image" />
       <h3 className='nav-header'>Navigasjonsmeny</h3>
     </div>
       */


    return(
      <div className='navigation-container'>
      <Planet orbitRadius={300} 
      bounce={true}
      bounceRadius={1}
      bounceDirection="BOTTOM"
      hideOrbit={true}
      rotation={100}
      sateliteOrientation="READABLE"
      dragablePlanet={true}
      dragRadiusPlanet={45}
      centerContent={
       <div
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: '50%',
                    backgroundColor: '#1da8a4',
            }}/>}
      
        open
        autoClose
    >
        <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#9257ad',
                }}
            />
            <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#9257ad',
                }}
            />
       
    </Planet>

    </div>
    
    )
}

export default Navigation