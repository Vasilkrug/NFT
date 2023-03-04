import React from 'react';
import './Logo.scss';
import {logo} from "../../assets/icons/icons";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className={'logo'}>
            <img src={logo} alt='logo'/>
            <NavLink to={'/'}><p>NFT Marketplace</p></NavLink>
        </div>
    );
};

export default Logo;