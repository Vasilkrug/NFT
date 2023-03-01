import React from 'react';
import './Nav.scss';

const Nav = ({activeMenu,children,classname}) => {

    return (
        <nav className={`nav ${activeMenu ? 'active' : ''} ${classname ? classname : ''}`}>
            <a href="">Marketplace</a>
            <a href="">Rankings</a>
            <a href="">Connect a wallet</a>
            {children}
        </nav>
    );
};

export default Nav;