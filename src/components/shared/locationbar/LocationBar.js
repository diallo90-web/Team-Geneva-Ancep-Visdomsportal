import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './locationBar.css';
import logo from '../../../images/AncepLogo3.png';
import hus from '../../../images/HusLogo.png';
import fremgang from '../../../images/FremgangLogo.png';
import navigasjon from '../../../images/NavigasjonLogo.png';
import sok from '../../../images/SøkLogo.png';


function LocationBar() {
    const location = useLocation();

    const isActiveLink = (pathname) => {
        if (pathname === '/'){
            return location.pathname === '/' ? 'activeLink' : '';
        }
        return location.pathname.startsWith(pathname) || location.pathname === pathname ? 'activeLink' : '';
    };


    return (
        <nav className="locationBar">
            <div className="headLineContainer">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="navLinks">
                <Link className={`link ${isActiveLink('/')}`} to="/">
                    <img src={hus} className="houseLogo" alt="hjem logo" />
                    <p>Hjem</p>
                </Link>
                <Link className={`link ${isActiveLink('/Navigasjon')}`} to="/Navigasjon">
                    <img src={navigasjon} className="logoLeft" alt="navigasjon logo" />
                    <p>Navigasjon</p>
                </Link>
                <Link className={`link ${isActiveLink('/Fremgang')}`} to="/Fremgang">
                    <img src={fremgang} className="logoLeft" alt="fremgang log" />
                    <p>Fremgang</p>
                </Link>
            </div>
            <div className="searchLinkContainer">
                <Link className={`link ${isActiveLink('/Sok')}`} to="/Sok">
                    <img src={sok} className="searchLogo" alt="searchLogo" />
                    <p>Søk</p>
                </Link>
            </div>
        </nav>
    );
}

export default LocationBar;