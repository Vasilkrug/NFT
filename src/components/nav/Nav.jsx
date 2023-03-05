import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.scss';

const Nav = ({activeMenu, children, classname, closeMenu}) => {

    return (
        <nav onClick={closeMenu} className={`nav ${activeMenu ? 'active' : ''} ${classname ? classname : ''}`}>
            <NavLink to='/marketplace'>Marketplace</NavLink>
            <NavLink to='/rankings'>Rankings</NavLink>
            <NavLink to='/wallet'>Connect a wallet</NavLink>
            {children}
        </nav>
    );
};

export default Nav;