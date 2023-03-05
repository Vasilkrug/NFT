import React from 'react';
import {NavLink} from 'react-router-dom';
import {logo} from '../../assets/icons/icons';
import './Logo.scss';

const Logo = () => {
    return (
        <div className={'logo'}>
            <img src={logo} alt='logo'/>
            <NavLink to={'/'}><p>NFT Marketplace</p></NavLink>
        </div>
    );
};

export default Logo;