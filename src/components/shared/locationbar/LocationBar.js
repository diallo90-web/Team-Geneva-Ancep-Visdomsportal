import React from 'react';
import { Link } from 'react-router-dom';
import './locationBar.css';
import logo from '../../../images/AncepLogo3.png'
import hus from '../../../images/HusLogo.png'
import fremgang from '../../../images/FremgangLogo.png'
import navigasjon from '../../../images/NavigasjonLogo.png'
import søk from '../../../images/SøkLogo.png'

function LocationBar(){
    return(
        <nav className="locationBar">
            <div className='headLineConatainer'>
                <img className='logo' src ={logo} alt='logo'/>
            </div>
            <div className="navLinks">
                <Link className="link" to="/Hjem"><img src={hus} className='houseLogo' alt='hjem logo'/>Hjem</Link>
                <Link className="link" to="/Navigasjon"><img src={navigasjon} className='logoLeft' alt='navigasjon logo'/>Navigasjon</Link>
                <Link className="link" to="/Fremgang"><img src={fremgang} className='logoLeft' alt='fremgang log'/>Fremgang</Link>
            </div>
            <div className='searchLinkContainer'>
                <Link className='link' to="/Søk" ><img src={søk} className='searchLogo' alt= 'searchLogo'/>Søk</Link>
            </div>
        </nav>
    )
}
export default LocationBar;