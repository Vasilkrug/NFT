import React from 'react';
import './Header.scss';
import {logo} from "../../assets/icons/icons";

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo"/>
            <p>NFT Marketplace</p>
        </header>
    );
};

export default Header;